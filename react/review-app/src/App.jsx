
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";








const App = () => {

  return (
    <div>

      <Header text="Review app" bgColor="#333333" textColor="#ffffff" />

      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          } />

          <Route path="/about" element={
            <About />
          } />

          <Route path="/blog" element={
            <Blog />
          } />

          <Route path="*" element={
            <NotFound />
          } />
        </Routes>
      </div>


    </div>
  )
}

export default App




