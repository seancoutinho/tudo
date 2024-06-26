import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import config from "../config/index.json";
import WaitlistCounter from "./WaitlistCounter";

const MainHero = () => {
  const { mainHero } = config;
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [role, setRole] = useState("");
  const [service, setService] = useState("");

  const handleJoinClick = async () => {
    setIsLoading(true);
    try {
      if (role === "Service Provider") {
        const { error } = await supabase
          .from("service_providers")
          .insert([{ email, service }]);
        if (error) throw error;
      } else if (role === "Client") {
        const { error } = await supabase
          .from("clients")
          .insert([{ email, type: role }]);
        if (error) throw error;
      }
      setSubscribed(true);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
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

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleJoinClick();
                      }}
                      className="relative">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
                        required
                      />

                      <select
                        onChange={(e) => setRole(e.target.value)}
                        className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none mt-4"
                        required>
                        <option value="">Select your role</option>
                        <option value="Service Provider">
                          Service Provider
                        </option>
                        <option value="Client">Client</option>
                      </select>

                      {role === "Service Provider" && (
                        <input
                          onChange={(e) => setService(e.target.value)}
                          type="text"
                          name="service"
                          id="service"
                          placeholder="Enter the service you offer"
                          className="block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none mt-4"
                          required
                        />
                      )}

                      <div className="mt-8 py-8 sm:mt-0 sm:flex sm:items-center sm:pr-3">
                        <button
                          type="submit"
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
