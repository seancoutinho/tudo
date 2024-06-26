import React from "react";

import config from "../config/index.json";

const ServiceProviders = () => {
  const { features } = config;

  return (
    <section className="py-12 sm:py-16 lg:py-20 text-gray-700">
      <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
        <div className="lg:flex lg:items-start lg:justify-between lg:space-x-12">
          <h2 className="flex-1 tracking-tighter ">
            <span className="font-sans text-4xl font-normal sm:text-5xl md:text-6xl">
              {" "}
              For Hairdressers{" "}
            </span>
            <span className="block font-serif text-5xl italic sm:text-6xl md:text-7xl">
              {" "}
              and Barbers{" "}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="transition-all duration-200 border rounded-lg border-neutral hover:bg-dark-gray">
            <div className="px-4 py-5 sm:p-6 md:p-8">
              <svg
                className="w-12 h-12 "
                viewBox="0 0 45 45"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.9375 22.5C33.525 22.5 35.6063 20.4 35.6063 17.8125C35.6063 15.225 33.525 13.125 30.9375 13.125C28.35 13.125 26.25 15.225 26.25 17.8125C26.25 20.4 28.35 22.5 30.9375 22.5ZM16.875 20.625C19.9875 20.625 22.4813 18.1125 22.4813 15C22.4813 11.8875 19.9875 9.375 16.875 9.375C13.7625 9.375 11.25 11.8875 11.25 15C11.25 18.1125 13.7625 20.625 16.875 20.625ZM30.9375 26.25C27.5063 26.25 20.625 27.975 20.625 31.4062V33.75C20.625 34.7812 21.4688 35.625 22.5 35.625H39.375C40.4062 35.625 41.25 34.7812 41.25 33.75V31.4062C41.25 27.975 34.3687 26.25 30.9375 26.25ZM16.875 24.375C12.5063 24.375 3.75 26.5688 3.75 30.9375V33.75C3.75 34.7812 4.59375 35.625 5.625 35.625H16.875V31.4062C16.875 29.8125 17.4938 27.0187 21.3188 24.9C19.6875 24.5625 18.1125 24.375 16.875 24.375Z"
                />
              </svg>
              <h3 className="mt-2 font-serif text-3xl italic ">
                {features.title}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {features.description}
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
                {features.title2}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {features.description2}
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
                {features.title3}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {features.description3}
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
                {features.title4}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {features.description4}
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
                {features.title5}
              </h3>
              <p className="mt-4 font-sans text-base font-normal text-opacity-50 ">
                {features.description5}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
