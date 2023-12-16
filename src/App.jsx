import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/authContext"
import Home from "./pages/home"
import Header from "./components/Header"
import Kitchen from "./components/Kitchen"
import Withdrawal from "./components/Withdrawal"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/kitchen" element={<Kitchen />} ></Route>
          <Route path="/withdrawal" element={<Withdrawal />} ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App