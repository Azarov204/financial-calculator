import { useState } from 'react'
import {
  Grid, Typography,
} from '@mui/material'
import PercentInputField from '../../components/PercentInputField';
import MoneyInputField from '../../components/MoneyInputField';

function RentVsMortgage() {

  // Rent inputs
  const [ rent, setRent ] = useState('1500');
  const [ rentUtil, setRentUtil ] = useState('150');
  const [ rentInsurance, setRentInsurance ] = useState('80');
  const [ rentIncrease, setRentIncrease ] = useState('2.5');

  const [ house, setHouse ] = useState('300000');
  const [ downpayment, setDownpayment ] = useState('30000');
  const [ closingCosts, setClosingCosts ] = useState('4500');

  return (
    <>
      <Typography sx={{ mt: 5 , mb: 1}}>Renting</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <MoneyInputField
            id={'rent'}
            label='Rent'
            value={rent}
            onChange={setRent}
          />
        </Grid>
        <Grid item>
          <MoneyInputField
            id={'rentUtil'}
            label='Utilities per month'
            value={rentUtil}
            onChange={setRentUtil}
            tooltip={'Utilities include heat, water, hydro and parking'}
          />
        </Grid>
        <Grid item>
          <MoneyInputField
            id={'rentInsurance'}
            label='Renters Insurance per month'
            value={rentInsurance}
            onChange={setRentInsurance}
          />
        </Grid>
        <Grid item>
          <PercentInputField
            id={'rentIncrease'}
            label='Rental increase per year'
            value={rentIncrease}
            onChange={setRentIncrease}
          />
        </Grid>
      </Grid>

      <Typography sx={{ mt: 5 , mb: 1}}>House Buying Costs</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <MoneyInputField
            id={'house'}
            label='House Price'
            value={house}
            onChange={setHouse}
          />
        </Grid>
        <Grid item>
          <MoneyInputField
            id={'downpayment'}
            label='Down Payment'
            value={downpayment}
            onChange={setDownpayment}
          />
        </Grid>
        <Grid item>
          <MoneyInputField
            id={'closingCosts'}
            label='Closing Costs'
            value={closingCosts}
            onChange={setClosingCosts}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default RentVsMortgage