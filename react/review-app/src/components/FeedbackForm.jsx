import { useState } from "react"
import Button from "./shared/Button"



const FeedbackForm = () => {

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
  
    
  return (
    <div className='card'>
        <h3>Add your review</h3>

        <form>
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
    </div>
  )
}

export default FeedbackForm