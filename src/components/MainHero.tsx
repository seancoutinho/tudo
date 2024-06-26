import React, { useState } from "react";
import config from "../config/index.json";
import WaitlistCounter from "./WaitlistCounter";

const MainHero = () => {
  const { mainHero } = config;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleJoinClick = () => {
    setIsLoading(true);

    fetch("http://localhost:5000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data); // handle the response data
        setIsLoading(false);
        setSubscribed(true); // reset the loading state
      })
      .catch((error) => {
        console.error(error); // handle the error
        setIsLoading(false);
        setSubscribed(true);
      });
  };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        {subscribed ? (
          <div className="text-3xl text-gray-600 py-8 font-bold">
            Thank you for joining the waiting list, we will contact you soon
          </div>
        ) : (
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <section className="">
                <div className="">
                  <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 font-pj">
                      {mainHero.title}{" "}
                      <span className="text-primary">{mainHero.subtitle}</span>
                    </h2>
                    <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
                      {mainHero.description}
                    </p>
                  </div>

                  <div className="relative max-w-lg mx-auto mt-14">
                    <div className="absolute -inset-x-2 -inset-y-5">
                      <div
                        className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                        style={{
                          background:
                            "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                        }}></div>
                    </div>

                    <form action="#" method="POST" className="relative">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter your email address"
                        className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                        required
                      />

                      <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                        <button
                          onClick={handleJoinClick}
                          className="
                            inline-flex
                            items-center
                            justify-center
                            w-full
                            px-8
                            py-4
                            text-base
                            font-bold
                            text-white
                            transition-all
                            duration-200
                            bg-gray-900
                            border border-transparent
                            sm:w-auto sm:py-3
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                            font-pj
                            hover:bg-opacity-90
                            rounded-xl
                        ">
                          {isLoading ? "Joining.." : "Join Waiting List"}
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">
                    No ads. No trails. No commitments
                  </p>
                </div>
              </section>
              <WaitlistCounter />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainHero;
