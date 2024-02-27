
export function calculateMortgage(principle, monthlyPayment, percent) {
  const monthlyInterst = (percent/100)/12;
  const array = [];

   let currentBalance = principle;
   let month = 1;

    do {
       const balanceWithInterest = currentBalance * (1 + monthlyInterst);
       const balanceAfterPayment = balanceWithInterest - monthlyPayment;
       const principlePaid = currentBalance - balanceAfterPayment;
       const interestPaid = monthlyPayment - principlePaid
       
       array.push({
           month,
           openingBalance: currentBalance,
           principle: principlePaid,
           interest: interestPaid,
           closingBalance: balanceAfterPayment
       })
       currentBalance = balanceAfterPayment;
       month++;
   } while (currentBalance > 0)
  
  return array;
}
