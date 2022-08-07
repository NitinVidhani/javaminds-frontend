import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import { Routes, Route, Navigate } from 'react-router-dom'
import { getTopCategory } from "./services/CategoryService";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound/indes";

function App() {

  const [topCategory, setTopCategory] = useState({})

  const getFirstCategory = async () => {
    const topCategory = await getTopCategory()
    if (topCategory) setTopCategory(topCategory)
  }

  useEffect(() => {
    getFirstCategory()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={`/1/posts`} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":categoryId/posts" element={<Home />} />
        <Route path=":categoryId/posts/:postTitle" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
