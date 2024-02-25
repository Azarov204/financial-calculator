import { useState } from "react"
import { COMPOUND_TIME_OPTIONS, RESULT_TIME_OPTIONS } from "../../utilities/Constants"
import TooltipTextbox from "../../components/TooltipTextbox";

function CompoundInterest() {

  const [ initialInvestment, setInitialInvestment] = useState(0);
  const [ additions, setAdditions ] = useState(0);
  const [ interest, setInterest ] = useState(7.00);
  const [ interestCompound, setInterestCompound ] = useState(COMPOUND_TIME_OPTIONS[0]);
  const [ timeHorzion, setTimeHorzion ] = useState(RESULT_TIME_OPTIONS[1]);
  const [ investmentLengthYears, setInvestmentLengthYears ] = useState(30);

  return (
    <>
      <TooltipTextbox
        id="initialInvestment"
        label="Initial Investment"
        value={initialInvestment}
        onChange={setInitialInvestment}
        numbersOnly
      />

      <TooltipTextbox
        id="additions"
        label="Regaular addition"
        value={additions}
        onChange={setAdditions}
        numbersOnly
      />

      <TooltipTextbox
        id="interestRate"
        label="Interest Rate"
        value={interest}
        onChange={setInterest}
        numbersOnly
      />
    </>
  )
}

export default CompoundInterest