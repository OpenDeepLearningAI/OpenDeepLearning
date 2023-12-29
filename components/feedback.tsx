import { useState } from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

const FeedbackForm = () => {
  const [isHelpful, setIsHelpful] = useState(null);

  const handleFeedback = (feedback) => {
    setIsHelpful(feedback);
    // Add your logic to handle the feedback (e.g., send it to a server)
  };

  return (
    <div className="text-center p-5 m-5">
      {isHelpful === null ? (
        <div className="flex items-center justify-center gap-4">
          <p>Did this page help you?</p>
          <div className="flex items-center justify-center mt-1 text-xl gap-4">
            <span
              className={`mb-2 cursor-pointer ${
                isHelpful === true ? "text-[#76B900]" : ""
              }`}
              onClick={() => handleFeedback(true)}
            >
              <FiThumbsUp className="hover:text-[#76B900]"/>
            </span>
            <span
              className={`mb-2 cursor-pointer ${
                isHelpful === false ? "text-[#76B900]" : ""
              }`}
              onClick={() => handleFeedback(false)}
            >
              <FiThumbsDown className="hover:text-[#76B900]"/>
            </span>
          </div>
        </div>
      ) : (
        <p>Thanks for your feedback!</p>
      )}
    </div>
  );
};

export default FeedbackForm;
