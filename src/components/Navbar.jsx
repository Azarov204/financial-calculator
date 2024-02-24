import { AppBar, Button, Stack, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"
import { URL_ABOUT, URL_CALCULATOR_SELECT, URL_HOME } from "../utilities/Constants"

function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to={URL_HOME}>Home</Button>
          <Button color="inherit" component={Link} to={URL_CALCULATOR_SELECT}>Calculators</Button>
          <Button color="inherit" component={Link} to={URL_ABOUT}>About</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar