import { createContext, useEffect, useState } from "react"

const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
          id:1,
          text:"This is a sample 1 from context"
        },
        {
          id:2,
          text:"This is a sample 2 from context"
        },
        {
          id:3,
          text:"This is a sample 3 from context"
        }
      ]);

      const deleteFeedback = (id) => {
        setFeedback(feedback.filter(item => item.id !== id));
      }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;

