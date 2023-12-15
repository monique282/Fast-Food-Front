import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/authContext"
import Home from "./pages/home"
import Header from "./components/Header"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App