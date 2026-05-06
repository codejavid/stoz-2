import { useState } from "react"
import Button from "./shared/Button"
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";




const FeedbackForm = ({handleAdd}) => {

  const [text, setText] = useState("");  
  const [btnDisable, setBtnDisabled] = useState(true);  
  const [messsage, setMessage] = useState("");  

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

     handleAdd(newFeedback);

     setText("");
     setBtnDisabled(true);


  }
  
    
  return (
    <Card>
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