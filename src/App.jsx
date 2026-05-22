import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />

      <Route path="/services" element={
        <Layout>
          <Services />
        </Layout>
      } />

      <Route path="/about" element={
        <Layout>
          <About />
        </Layout>
      } />

      <Route path="/contact" element={
        <Layout>
          <Contact />
        </Layout>
      } />
    </Routes>
  )
}

export default App