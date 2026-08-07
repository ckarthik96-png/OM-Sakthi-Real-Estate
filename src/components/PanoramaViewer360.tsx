'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Compass, RotateCw, Sparkles, Move, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface PanoramaViewer360Props {
  initialRoom?: 'living' | 'master' | 'balcony';
  title?: string;
}

const ROOM_IMAGES = {
  living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  master: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
  balcony: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
};

export default function PanoramaViewer360({
  initialRoom = 'living',
  title = "4 BHK Ultra-Luxury Villa Interior"
}: PanoramaViewer360Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeRoom, setActiveRoom] = useState<'living' | 'master' | 'balcony'>(initialRoom);
  const [isLoaded, setIsLoaded] = useState(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const textureLoaderRef = useRef<THREE.TextureLoader | null>(null);

  // Drag interaction variables
  const isUserInteracting = useRef(false);
  const onPointerDownPointerX = useRef(0);
  const onPointerDownPointerY = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);
  const lon = useRef(0);
  const lat = useRef(0);
  const fov = useRef(75);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup inside sphere (0, 0, 0)
    const camera = new THREE.PerspectiveCamera(fov.current, width / height, 1, 1100);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    // Clear previous children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Inverted Sphere Geometry for true 360-degree surrounding environment
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    // Invert the geometry on the x-axis so that all faces point inward
    geometry.scale(-1, 1, 1);

    // 5. Load Panorama Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoaderRef.current = textureLoader;

    const texture = textureLoader.load(
      ROOM_IMAGES[activeRoom],
      () => {
        setIsLoaded(true);
      }
    );
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    // 6. Animation Loop with Slow Auto-Rotation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isUserInteracting.current) {
        // Slow auto rotation oscillation between -80 and +80 degrees
        lon.current += 0.1 * (isUserInteracting.current ? 0 : 1);
        if (lon.current > 85) lon.current = -85;
      }

      // Clamp horizontal angle to 180° sweep (-90° to +90°) and vertical angle (-60° to +60°)
      lon.current = Math.max(-90, Math.min(90, lon.current));
      lat.current = Math.max(-60, Math.min(60, lat.current));
      const phi = THREE.MathUtils.degToRad(90 - lat.current);
      const theta = THREE.MathUtils.degToRad(lon.current);

      const targetX = 500 * Math.sin(phi) * Math.cos(theta);
      const targetY = 500 * Math.cos(phi);
      const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

      if (cameraRef.current) {
        cameraRef.current.lookAt(targetX, targetY, targetZ);
        cameraRef.current.fov = fov.current;
        cameraRef.current.updateProjectionMatrix();
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 7. Event listeners for true 3D spherical mouse/touch panning
    const onPointerDown = (event: PointerEvent) => {
      isUserInteracting.current = true;
      onPointerDownPointerX.current = event.clientX;
      onPointerDownPointerY.current = event.clientY;
      onPointerDownLon.current = lon.current;
      onPointerDownLat.current = lat.current;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isUserInteracting.current) return;
      lon.current = (onPointerDownPointerX.current - event.clientX) * 0.25 + onPointerDownLon.current;
      lat.current = (event.clientY - onPointerDownPointerY.current) * 0.25 + onPointerDownLat.current;
    };

    const onPointerUp = () => {
      isUserInteracting.current = false;
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      fov.current = Math.max(30, Math.min(95, fov.current + event.deltaY * 0.05));
    };

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      domElement.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Handle Room Switching
  const handleRoomChange = (roomKey: 'living' | 'master' | 'balcony') => {
    setActiveRoom(roomKey);
    setIsLoaded(false);
    if (textureLoaderRef.current && sphereRef.current) {
      textureLoaderRef.current.load(ROOM_IMAGES[roomKey], (newTexture) => {
        newTexture.colorSpace = THREE.SRGBColorSpace;
        if (sphereRef.current) {
          (sphereRef.current.material as THREE.MeshBasicMaterial).map = newTexture;
          (sphereRef.current.material as THREE.MeshBasicMaterial).needsUpdate = true;
        }
        setIsLoaded(true);
      });
    }
  };

  const handleZoom = (delta: number) => {
    fov.current = Math.max(30, Math.min(95, fov.current - delta));
  };

  return (
    <div className="bg-slate-950 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative">
      
      {/* 360 Control Bar Header */}
      <div className="bg-slate-900/90 backdrop-blur-md p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white z-20 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
            <RotateCw className="w-4 h-4 animate-spin" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm flex items-center gap-1.5">
              WebGL 3D Full-House 180° Panoramic Tour <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </h4>
            <p className="text-[11px] text-slate-400">Click & Drag to rotate 180° across front, interior living room & back balcony</p>
          </div>
        </div>

        {/* Room Switcher Pills */}
        <div className="flex items-center gap-1.5 text-xs font-bold bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => handleRoomChange('living')}
            className={`px-3 py-1 rounded-lg transition ${activeRoom === 'living' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Front Living Room
          </button>
          <button
            onClick={() => handleRoomChange('master')}
            className={`px-3 py-1 rounded-lg transition ${activeRoom === 'master' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Master Suite
          </button>
          <button
            onClick={() => handleRoomChange('balcony')}
            className={`px-3 py-1 rounded-lg transition ${activeRoom === 'balcony' ? 'bg-[#0F4C81] text-white shadow-xs' : 'text-slate-400 hover:text-white'}`}
          >
            Back Side Balcony
          </button>
        </div>
      </div>

      {/* WebGL 3D Canvas Mount Point */}
      <div className="relative w-full h-[450px] sm:h-[550px] bg-black">
        <div 
          ref={mountRef} 
          className="w-full h-full cursor-grab active:cursor-grabbing relative overflow-hidden" 
        />

        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-white z-10">
            <RotateCw className="w-8 h-8 text-[#D4AF37] animate-spin mb-2" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Rendering WebGL 3D 180° Environment...</span>
          </div>
        )}

        {/* Instruction Badge */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[#D4AF37] text-xs font-bold flex items-center gap-2 pointer-events-none z-10">
          <Move className="w-4 h-4 animate-bounce" />
          <span>180° Full House Rotation — Drag Mouse / Touch</span>
        </div>

        {/* Zoom & Compass Controls Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-xl border border-white/20 text-white text-xs z-10">
          <button 
            onClick={() => handleZoom(10)}
            className="p-2 hover:bg-white/10 rounded-lg text-[#D4AF37]"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button 
            onClick={() => handleZoom(-10)}
            className="p-2 hover:bg-white/10 rounded-lg text-[#D4AF37]"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Compass Indicator */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] pointer-events-none z-10">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
      </div>

    </div>
  );
}
