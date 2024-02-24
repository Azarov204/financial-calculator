import { Routes, Route } from "react-router-dom"
import { Container } from "@mui/material"
import { URL_ABOUT, URL_CALCULATOR_SELECT, URL_COMPOUND_INTEREST, URL_HOME, URL_RENT_VS_MORTGAGE } from "./utilities/Constants"
import Home from "./pages/Home"
import About from "./pages/About"
import RentVsMortgage from "./pages/calculators/RentVsMortgage"
import CompoundInterest from "./pages/calculators/CompoundInterest"
import CalculatorSelect from "./pages/calculators/CalculatorSelect"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path={URL_HOME} element={<Home />} />
          <Route path={URL_ABOUT} element={<About />} />
          <Route path={URL_CALCULATOR_SELECT} element={<CalculatorSelect />} />
          <Route path={URL_RENT_VS_MORTGAGE} element={<RentVsMortgage />} />
          <Route path={URL_COMPOUND_INTEREST} element={<CompoundInterest />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
