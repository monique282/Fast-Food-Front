import { AuthContext } from "./context/authContext"
import Home from "./pages/home"

function App() {
  return (
    <AuthContext>
      <Home/>
    </AuthContext>
  )
}

export default App