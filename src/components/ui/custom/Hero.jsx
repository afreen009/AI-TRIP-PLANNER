import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[60px]  text-center mt-16">
        <span className="text-[#34936F]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at Your Fingertips 🌏.
        <p className="text-xl mt-10 text-gray-500 text-center">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to={"/create-trip"}>
          <Button>Get Started, It's Free</Button>
        </Link>
      </h1>
    </div>
  );
}

export default Hero;
