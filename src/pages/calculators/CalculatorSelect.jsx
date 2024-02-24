import { Grid } from "@mui/material"
import CalculatorBox from "../../components/CalculatorBox"
import { URL_RENT_VS_MORTGAGE, URL_COMPOUND_INTEREST } from "../../utilities/Constants"

function CalculatorSelect() {

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4} sm={6}>
          <CalculatorBox name="Compound Interest Calculator" link={URL_COMPOUND_INTEREST}/>
        </Grid>
        <Grid item md={4} sm={6}>
          <CalculatorBox name="Rent Vs Mortgage Calculator" link={URL_RENT_VS_MORTGAGE}/>
        </Grid>
      </Grid>
    </>
  )
}

export default CalculatorSelect