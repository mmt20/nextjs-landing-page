import React from "react";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <section className="pt-16 pb-16">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-900 dark:text-white font-bold">
        10K+ Customers Trust Us
      </h1>
      <span className="w-16 h-1 bg-pink-600 mx-auto mt-3 block"></span>
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto mt-16">
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Review;
