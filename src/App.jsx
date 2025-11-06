import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Faculty from './pages/Faculty'
import Admissions from './pages/Admissions'
import News from './pages/News'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="./about" element={<About />} />
            <Route path="./programs" element={<Programs />} />
            <Route path="./faculty" element={<Faculty />} />
            <Route path="./admissions" element={<Admissions />} />
            <Route path="./news" element={<News />} />
            <Route path="./student-life" element={<StudentLife />} />
            <Route path="./contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
