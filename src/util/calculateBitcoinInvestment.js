// Function to calculate the investment value based on historical Bitcoin prices
export function calculateInvestment(initialInvestment, yearOfInvestment) {
  // This is a simplified version; you might want to integrate real historical data
  const currentYear = new Date().getFullYear();
  const yearsInvested = currentYear - yearOfInvestment;

  // Assuming an average annual return (this is a hypothetical value)
  const averageAnnualReturn = 0.1; // 10% return per year as an example

  // Calculate the future value using the formula for compound interest
  const futureValue =
    initialInvestment * Math.pow(1 + averageAnnualReturn, yearsInvested);

  return futureValue.toFixed(2); // Returning as a string for easier display
}
