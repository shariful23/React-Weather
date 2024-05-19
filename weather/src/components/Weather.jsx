import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
export default function Weather() {
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("Frankfurt");
  const [data, setData] = useState([]);

  const termChange = (text) => {
    setTerm(text);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=25a17429bf29005fdef33c0b4400b38a&&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  let loadingText = (
    <p className=" text-center text-gray-600 text-3xl">Loading..</p>
  );

  if (data.cod == 404) {
    return (
      <>
        <div className="text-center">
          <p className="text-2xl  mt-72 font-mono">"{term}" Not Found</p>
        </div>
        <div className="text-center">
          <a className=" rounded-sm bg-red-400 text-white" href="/">
            Search Again
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Searchbar searchText={termChange} />
      {isLoading ? (
        loadingText
      ) : (
        <div class="max-w-4xl mx-auto py-4 rounded-lg overflow-hidden shadow-lg bg-white">
          <div class="px-6 py-4 bg-gray-800 text-white rounded-se-xl rounded-ss-xl">
            <div class="font-normal text-2xl font-mono">
              {data.name}, {data.sys.country} 
            </div>
          </div>

          <div class="px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="font-semibold text-2xl text-gray-800 flex justify-center space-x-1 ">
                <h1>Temp:</h1>
                <h2> {data.main.temp.toFixed(0)} °C</h2>
              </div>
              <div class="text-gray-700 text-2xl mt-2">
                {data.weather[0].main}, {data.weather[0].description}
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-4 text-gray-700">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM1 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm15.71 3.29a2 2 0 1 1-2.82-2.82 2 2 0 0 1 2.82 2.82zM6.29 6.29a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zm12.72 7.42a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zM4.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Wind: {data.wind.speed} km/h
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM1 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm15.71 3.29a2 2 0 1 1-2.82-2.82 2 2 0 0 1 2.82 2.82zM6.29 6.29a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zm12.72 7.42a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zM4.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Humidity: {data.main.humidity}%
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM1 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm15.71 3.29a2 2 0 1 1-2.82-2.82 2 2 0 0 1 2.82 2.82zM6.29 6.29a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zm12.72 7.42a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zM4.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Pressure: {data.main.pressure} hPa
              </div>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM1 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm15.71 3.29a2 2 0 1 1-2.82-2.82 2 2 0 0 1 2.82 2.82zM6.29 6.29a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zm12.72 7.42a2 2 0 1 1-2.82 2.82 2 2 0 0 1 2.82-2.82zM4.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Feels Like: {data.main.feels_like.toFixed(0)}°C
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
