import { useContext, useEffect, useState } from "react"
import Button from "./shared/Button"
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";





const FeedbackForm = ({handleAdd}) => {

  const [text, setText] = useState("");  
  const [btnDisable, setBtnDisabled] = useState(true);  
  const [messsage, setMessage] = useState("");  

  const { feedbackEdit, addFeedback, updateFeedback } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
   const trimmedText = e.target.value.trimStart();

   let textError = "";

   if(trimmedText.length < 10){
     textError = "Character must be at least 10";
     setMessage(textError);
     setBtnDisabled(true)
   }else{
    setMessage("");
    setBtnDisabled(false);
   }

   setText(trimmedText);


  }

  const handleSubmit = (e) => {

     e.preventDefault();

     const newFeedback = {
       id:uuidv4(),
       text:text
     }

     if(feedbackEdit.edit === true){
       console.log("Update");
       updateFeedback(feedbackEdit.item.id, newFeedback);
     } else{
      console.log("Add");
      addFeedback(newFeedback);
     }

     

     setText("");
     setBtnDisabled(true);


  }


  useEffect(() => {
     if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
     }
  }, [feedbackEdit]);
  

  // const [count, setCount] = useState(1);

  // const inc = () => {
  //   setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log("Hey");
  // }, []);

    
  return (
    <Card>

        {/* <h4>{count}</h4>

        <button onClick={() => inc()}>click me</button> */}

        <h3>Add your review</h3>

        <form onSubmit={handleSubmit}>
            <div className='input-group'>
                <input type="text" placeholder='Enter your ideas' value={text} onChange={handleTextChange}/>
                <Button version="primary" type="submit" isDiabled={btnDisable}>
                    Send
                </Button>

               
            </div>

            <p className='message'>
                    {messsage}
                </p>
        </form>
    </Card>
  )
}

export default FeedbackForm