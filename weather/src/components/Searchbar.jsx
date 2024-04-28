import { useState } from "react";
export default function Searchbar({ searchText }) {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    if (text.length> 0) {
      e.preventDefault();
      searchText(text);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className=" place-content-center p-4 m-4  rounded-md flex items-center">
          <div>
            <input
              type="text"
              placeholder="e.g. London"
              onChange={changeHandler}
              name="search"
              className="bg-white peer-invalid:visible border border-slate-400 lg:text-lg rounded-md py-2 pl-5 pr-64 shadow-sm  focus:outline-none focus:ring-sky-500 focus:border-sky-300"
            />
          </div>
          <div>
            <button
              className="flex-shrink-0 bg-sky-500 ml-5 hover:bg-sky-700 px-10 font-mono text-lg py-2 rounded-md text-white "
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