import React from "react";

import config from "../config/index.json";

const Product = () => {
  const { product } = config;


  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <h1
        className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}>
        {product.title.split(" ").map((word, index) => (
          <span
            key={index}
            className={index % 2 ? "text-primary" : "text-border"}>
            {word}{" "}
          </span>
        ))}
      </h1>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:mt-16 gap-x-10 gap-y-8">
          <div>
            <img
              className="w-full rounded-xl"
              src="/assets/images/hairdresser-products.jpg"
              alt=""
            />
            <h3 className="text-lg font-bold text-gray-900 mt-9">
              For Service Providers:
            </h3>
            <p className="max-w-lg mt-4 text-sm font-normal text-gray-600">
              <span className="font-bold">Problem:</span> Managing business and
              booking appointments efficiently while expanding clientele is
              challenging.
            </p>
            <p className="max-w-lg mt-4 text-sm font-normal text-gray-600">
              <span className="font-bold">Our Solution:</span> Our platform
              provides streamlined business management tools and easy
              appointment scheduling, enabling service providers to focus on
              delivering exceptional services and reaching a broader audience
              effortlessly.
            </p>
          </div>

          <div>
            <img
              className="w-full rounded-xl"
              src="/assets/images/makeup-client.jpg"
              alt=""
            />
            <h3 className="text-lg font-bold text-gray-900 mt-9">
              For Clients:
            </h3>
            <p className="max-w-lg mt-4 text-sm font-normal text-gray-600">
              <span className="font-bold">Problem:</span> Finding tailored
              beauty and makeup solutions in Poland is difficult.
            </p>
            <p className="max-w-lg mt-4 text-sm font-normal text-gray-600">
              <span className="font-bold">Our Solution:</span> We bridge the gap
              by connecting clients to authentic African beauty services and
              products, ensuring personalized care and expertise right at
              their fingertips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
