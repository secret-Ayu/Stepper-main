import React from 'react'
import LinearStepper from './component/LinearStepper'
import { CssBaseline,Paper,Container,Box} from "@mui/material"


function App()  {
  return (
    <div className="App">
    <>
    <CssBaseline/>
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
      <LinearStepper/>
      </Paper>
     </Container>
    </>
     
    </div>
  )
}

export default App
