import { useState } from "react";
export default function Searchbar({ searchText }) {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    if (text.length > 0) {
      e.preventDefault();
      searchText(text);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" custom place-content-center sm:ml-32 pt-4 pb-4 rounded-md flex  ">
          <div>
            <input
              type="text"
              placeholder="e.g. London"
              onChange={changeHandler}
              name="search"
              className="bg-white
              px-2 py-2 
                peer-invalid:visible border
                 border-slate-400 
                 lg:text-lg rounded-md
                  pl-5 sm:pl-0
                   pr-64 sm:pr-4 shadow-sm 
                    focus:outline-none
                     focus:ring-sky-500
                      focus:border-sky-300"
            />
          </div>
          <div>
            <button
              className="flex-shrink-0 bg-sky-600 ml-5 hover:bg-sky-700 px-10 font-mono text-lg py-2 rounded-md text-white "
              type="submit"
            >
              Search Weather
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
