import React from "react";

import config from "../config/index.json";

const ServiceProviders = () => {
  const { clients } = config;

  return (
    <section className="py-12 sm:py-16 lg:py-20 text-gray-700">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="lg:flex lg:items-start lg:justify-between lg:space-x-12">
          <h2 className="flex-1 tracking-tighter ">
            <span className="block font-serif text-5xl italic sm:text-6xl md:text-7xl">
              {" "}
              For Consumers{" "}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12">
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="mt-2 font-serif text-3xl italic ">
                {clients.title}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {clients.description}
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12">
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="mt-2 font-serif text-3xl italic ">
                {clients.title2}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {clients.description2}
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12">
                <path
                  fill-rule="evenodd"
                  d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="mt-2 font-serif text-3xl italic ">
                {clients.title3}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {clients.description3}
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-12 w-12">
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
              </svg>

              <h3 className="mt-2 font-serif text-3xl italic ">
                {clients.title4}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {clients.description4}
              </p>
            </div>
          </div>

          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-12 w-12">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>

              <h3 className="mt-2 font-serif text-3xl italic ">
                {clients.title5}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {clients.description5}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
