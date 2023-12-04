import Signin from "./components/Signin"

function App() {
  let props = {
    greet : "Welcome",
    btn : "Sign in"
  }
  return (
    <>
      <Signin props={props} />      
    </>
  )
}

export default App
