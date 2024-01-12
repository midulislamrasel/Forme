import { useState } from "react";

function Form() {
  //Form er Data Store
  const [data, SetData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Error er Data Store
  const [errorss, setErrors] = useState(null);

  // HandleClick HTML Frome Input Filed
  const handleBlur = (e) => {
    const { name, value } = e.target; // Frome Theke Data Destakchar kore ber kore nilam e.target er mahodme Valu paoya jai
    // console.log(name, value);     // Frome theke Data chack kore dekhlam asche ki na
    SetData({
      ...data,
      [name]: value, // { name:"", email:"eee",message:"" }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // From er Filed PreventDefault set korlam

    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/; // Regular Expression
    var regex = /^[a-zA-Z ]+$/;

    if (data.name !== "") {
      if (!regex.test(data.name)) {
        errors.name = "Name sould be a valid string";
      }
    }
    if (data.email !== "") {
      if (!emailRegex.test(data.email)) {
        errors.email = "Mail should be valid mail";
      }
    }

    const errors = {}; // 0 1,2,3
    if (data.name === "") {
      // setErrors(errors);
      // return;
      errors.name = "Name is required";
    }
    if (data.email === "") {
      // setErrors(errors);
      // return;
      errors.email = "Email is required";
    }

    if (data.message === "") {
      // setErrors(errors);
      // return;
      errors.message = "Message is required";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("triggered!");
    }
  };

  // console.log(errorss);

  /*
    name: string type
    email : start or inlcude @ .com
    comment: string but minimum length 120 chars and max 250 chars
    each field will be filled not emty
    */
  return (
    <div>
      <div className=" bg-black h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm space-x-3 mx-auto"
        >
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
              Contact us !
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Name"
                    onBlur={handleBlur}
                    // value={data.name}
                    name="name"
                  />
                  {errorss && errorss.name && (
                    <p className="text-red-500">{errorss.name}</p>
                  )}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="email"
                    onBlur={handleBlur}
                    // value={data.email}
                    name="email"
                  />
                  {errorss && errorss.email && (
                    <p className="text-red-500">{errorss.email}</p>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Enter your comment"
                    name="message"
                    rows="5"
                    cols="40"
                    // value={data.message}
                    onBlur={handleBlur}
                  ></textarea>
                </label>
                {errorss && errorss.message && (
                  <p className="text-red-500">{errorss.message}</p>
                )}
              </div>
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
