import React from "react";
import "../../App.css";
import { LuCalendarHeart } from "react-icons/lu";

const Post = ({ post }) => {
  const { question, answer, date } = post;

  return (
    <>
      <div className="max-w-10/12 mx-auto rounded-2xl bg-white p-4 mb-8">
        <div>
          <h1 className="font-plus-jakarta-sans text-xl font-bold border-b-2 border-dashed border-gray-400 pb-5">
            {question}
          </h1>
          <p className="font-plus-jakarta-sans text-lg py-5 border-b-2 border-dashed border-gray-400">
            <span className="text-[#80a1d4]  font-semibold">Answer:</span>
            <br />
            {answer}
          </p>
          <div className="flex gap-2 text-gray-500 font-plus-jakarta-sans text-lg font-medium py-5">
            <LuCalendarHeart size={25} className="text-gray-500" />
            <p>Added at {date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
