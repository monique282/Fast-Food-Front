import AuthProvider from "./context/authContext"
import Home from "./pages/home"

function App() {
  return (
    <AuthProvider>
      <Home/>
    </AuthProvider>
  )
}

export default App