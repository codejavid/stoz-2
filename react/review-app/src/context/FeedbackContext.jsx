import { createContext, useEffect, useState } from "react"
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {

  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: "This is a sample 1 from context"
    // },
    // {
    //   id: 2,
    //   text: "This is a sample 2 from context"
    // },
    // {
    //   id: 3,
    //   text: "This is a sample 3 from context"
    // }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async() => {
    try{
      const response = await axios.get("https://69fdfc438c70b15fa3ca0dd5.mockapi.io/api/v1/posts");

      setFeedback(response.data);
    } catch(error){
      console.log("Error");
    }
  }

  // const addFeedback = (newFeedback) => {
  //   setFeedback([newFeedback, ...feedback]);
  // };


  const addFeedback = async(newFeedback) => {
    try{
      const response = await axios.post("https://69fdfc438c70b15fa3ca0dd5.mockapi.io/api/v1/posts", newFeedback, {
        headers:{
          "Content-Type":"application/json"
        }
      });

      setFeedback([response.data, ...feedback]);
    } catch(error){
      console.log("Error");
    }
  };

  // const updateFeedback = (id, updItem) => {

  //   setFeedback(feedback.map((item) => 
  //     item.id === id ? {...item, ...updItem} : item
  //   ))

  // }


  const updateFeedback = async(id, updItem) => {

    try{
      const response = await axios.put(`https://69fdfc438c70b15fa3ca0dd5.mockapi.io/api/v1/posts/${id}`, updItem, {
        headers:{
          "Content-Type":"application/json"
        }
      });

      console.log(updItem);

      setFeedback(feedback.map((item) => 
        item.id === id ? {...item, ...response.data} : item
      ))
    } catch(error){
      console.log("Error");
    }

  }


  // const deleteFeedback = (id) => {
  //   setFeedback(feedback.filter(item => item.id !== id));
  // };

  const deleteFeedback = async(id) => {
    if(window.confirm("Are you sure?")){
      try{
        const response = await axios.delete(`https://69fdfc438c70b15fa3ca0dd5.mockapi.io/api/v1/posts/${id}`);
  
        setFeedback(feedback.filter(item => item.id !== id));
      } catch(error){
        console.log("Error");
      }
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item:item,
      edit:true
    });
  }


  console.log(FeedbackContext);





  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      feedbackEdit,
      editFeedback,
      updateFeedback
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;

