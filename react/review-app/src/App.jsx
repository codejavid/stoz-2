
import { useEffect, useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";








const App = () => {

  return (
    <div>

      <Header text="Review app" bgColor="#333333" textColor="#ffffff" />
       
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
      </div>
      

    </div>
  )
}

export default App




