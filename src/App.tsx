import { useState } from "react";
import starIcon from "./images/icon-star.svg";
import thankYouImg from "./images/illustration-thank-you.svg";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("Is submit value is :", isSubmit);

  const handleSubmit = () => {
    // change usestate value to true
    setIsSubmit(true);
  };

  return (
    <div className="bg-gray-800 flex justify-center items-center min-h-screen">
      {isSubmit === true ? (
        // Thank you UI
        <div className="">
          <div className="bg-gradient-to-b space-y-8 from-gray-700 via-gray-800 to-gray-900 rounded-2xl py-12 px-9 w-[400px]">
            {/* for thank you image */}
            <div className="">
              <img
                className="mx-auto"
                src={thankYouImg}
                alt="Thank you image"
              />
            </div>

            {/* for selected text */}
            <div className="flex justify-center">
              <p className="text-orange-200 text-sm py-1 px-4 rounded-full bg-gray-400 inline-block">
                You selected 4 out of 5
              </p>
            </div>

            {/* For Thank you text */}
            <div>
              <h1 className="text-center text-2xl text-gray-200">Thank you!</h1>
              <p className="text-gray-400 text-center text-sm">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      ) : (
        // How did we do UI
        <div className="bg-gradient-to-b space-y-8 from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-8 w-[400px]">
          {/* For Star Icon */}
          <div className="">
            <div className="bg-yellow-300 cursor-pointer rounded-full hover:opacity-80 active:opacity-95 p-4 inline-block">
              <img className=" w-6" src={starIcon} alt="Star Icon" />
            </div>
          </div>

          {/* For Text */}
          <div className="space-y-2">
            <h1 className="text-2xl text-gray-200">How did we do?</h1>
            <p className="text-gray-500 text-sm">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>

          {/* For Rating Number */}
          <div className="flex gap-4">
            <button className="hover:bg-orange-400 duration-100 bg-gray-400 rounded-full py-3 px-5 text-gray-700">
              1
            </button>
            <button className="hover:bg-orange-400 duration-100 bg-gray-400 rounded-full py-3 px-5 text-gray-700">
              2
            </button>
            <button className="hover:bg-orange-400 duration-100 bg-gray-400 rounded-full py-3 px-5 text-gray-700">
              3
            </button>
            <button className="hover:bg-orange-400 duration-100 bg-gray-400 rounded-full py-3 px-5 text-gray-700">
              4
            </button>
            <button className="hover:bg-orange-400 duration-100 bg-gray-400 rounded-full py-3 px-5 text-gray-700">
              5
            </button>
          </div>

          {/* For Submit Button */}
          <div>
            <button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-white hover:text-orange-400 duration-100 text-gray-200 w-full rounded-full px-2 py-3"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
