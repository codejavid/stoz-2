
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";


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
    },
  ]);




  return (
    <div>
      <Header text="Review app" bgColor="#333333" textColor="#ffffff" />
       
      <div className="container">
        <FeedbackList feedback={feedback}/>
      </div>

      

    </div>
  )
}

export default App




