export interface StatutoryConfig {
  stampDutyPercent: number;
  registrationFeePercent: number;
  cessPercent: number;
  disclaimer: string;
}

export const DEFAULT_STATUTORY_CONFIG: StatutoryConfig = {
  stampDutyPercent: 5.6,
  registrationFeePercent: 1.0,
  cessPercent: 0.5,
  disclaimer: "Rates are indicative and based on standard Karnataka government notifications. Concessions or cess may apply based on property value and registration sub-registrar jurisdiction."
};

export interface CalculatorInputs {
  propertyPrice: number;
  downPaymentPercent: number;
  loanTenureYears: number;
  interestRatePercent: number;
  expectedMonthlyRent?: number;
  annualAppreciationRatePercent?: number;
}

export function calculateComprehensiveFinancials(inputs: CalculatorInputs, config: StatutoryConfig = DEFAULT_STATUTORY_CONFIG) {
  const { propertyPrice, downPaymentPercent, loanTenureYears, interestRatePercent, expectedMonthlyRent = 0, annualAppreciationRatePercent = 7.0 } = inputs;

  const downPayment = Math.round((propertyPrice * downPaymentPercent) / 100);
  const loanAmount = propertyPrice - downPayment;
  
  const monthlyRate = interestRatePercent / 12 / 100;
  const totalMonths = loanTenureYears * 12;
  
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const stampDuty = Math.round((propertyPrice * config.stampDutyPercent) / 100);
  const registrationFee = Math.round((propertyPrice * config.registrationFeePercent) / 100);
  const cessFee = Math.round((propertyPrice * config.cessPercent) / 100);
  const totalAcquisitionCost = propertyPrice + stampDuty + registrationFee + cessFee;

  const annualRentalIncome = expectedMonthlyRent * 12;
  const grossRentalYieldPercent = Number(((annualRentalIncome / propertyPrice) * 100).toFixed(2));

  const estimatedValue5Years = Math.round(propertyPrice * Math.pow(1 + annualAppreciationRatePercent / 100, 5));

  return {
    propertyPrice,
    downPayment,
    loanAmount,
    monthlyEMI,
    stampDuty,
    registrationFee,
    cessFee,
    totalAcquisitionCost,
    grossRentalYieldPercent,
    estimatedValue5Years,
    disclaimer: config.disclaimer
  };
}
