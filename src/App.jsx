import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import Error from "./pages/Error"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="location/:id" element={<Location />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
