
import { useEffect, useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";








const App = () => {


  const [feedback, setFeedback] = useState([
    {
      id:1,
      text:"This is a sample 1"
    },
    {
      id:2,
      text:"This is a sample 2"
    },
    {
      id:3,
      text:"This is a sample 3"
    }
  ]);


  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  }



  return (
    <div>

      <Header text="Review app" bgColor="#333333" textColor="#ffffff" />
       
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats/>
        <FeedbackList/>
      </div>
      

    </div>
  )
}

export default App




