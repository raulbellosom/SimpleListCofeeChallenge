import { useState, useEffect } from "react";
import BgCafe from "./assets/bg-cafe.jpg";
import Card from "./components/Card";
import Vector from "./assets/vector.svg";
import classNames from "classnames";

function App() {
  const [coffes, setCoffes] = useState([]);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (isActive) {
          setCoffes(data);
        } else {
          setCoffes(data.filter((coffee) => coffee.available));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isActive]);
  return (
    <main className="h-full w-full bg-black grid grid-cols-1 grid-rows-1">
      <img
        src={BgCafe}
        alt="background caffe"
        className="w-full h-96 object-cover row-start-1 col-start-1"
      />
      <div className="row-start-1 col-start-1 pt-40 pb-32 mx-8 xl:mx-36 h-full flex justify-center items-center ">
        <div className="w-full bg-gray-dark px-2 lg:px-10 py-28 rounded-3xl">
          <div className="relative mx-4 lg:mx-20">
            <img
              src={Vector}
              alt="Vector"
              width={300}
              className="mx-auto absolute -top-20 left-1/2 transform -translate-x-32  md:-translate-x-3.5"
            />
            <div className="relative flex flex-col gap-5 justify-center">
              <h1 className="text-4xl font-medium text-white text-center">
                {" "}
                Our Collection
              </h1>
              <div className="flex justify-center">
                <p className="text-gray-light w-full md:w-[28rem] font-semibold text-center">
                  Introducing our Coffee Collection, a selection of unique
                  coffees from different roast types and origins, expertly
                  roasted in small batches and shipped fresh weekly.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className={classNames("py-1.5 px-3 rounded-lg", {
                    "bg-gray-light text-white": isActive,
                    "bg-gray-dark text-white": !isActive,
                  })}
                  onClick={() => setIsActive(true)}
                >
                  All products
                </button>
                <button
                  onClick={() => setIsActive(false)}
                  className={classNames("py-1.5 px-3 rounded-lg", {
                    "bg-gray-light text-white": !isActive,
                    "bg-gray-dark text-white": isActive,
                  })}
                >
                  Available Now
                </button>
              </div>
            </div>
            <div className="pt-10 mt-12 w-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
              {coffes.map((coffee, index) => {
                return <Card key={index} item={coffee} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
