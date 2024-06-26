import React from "react";

const WaitlistCounter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold">Waitlist Members</h2>
      <p className="mt-2 text-gray-700 text-4xl font-extrabold">
        {count <= 50 ? count : "50+"}
      </p>
      <p className="mt-1 text-lg">people have joined the waitlist</p>
    </div>
  );
};

export default WaitlistCounter;
