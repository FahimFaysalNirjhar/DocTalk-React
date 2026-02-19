import React from "react";
import { useNavigation } from "react-router";
import { useLoaderData } from "react-router";
import Post from "../../components/Post/Post";
import "../../App.css";

const Blog = () => {
  const posts = useLoaderData();
  console.log(posts);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <>
      <div className="bg-[#EFEFEF] pb-20">
        <div className="py-10 text-center">
          <h1 className="font-plus-jakarta-sans text-3xl font-bold">Blogs</h1>
          <p className="my-8  text-[#847577] font-medium font-plus-jakarta-sans">
            Let's explore some basic concepts that will make you a good
            developer
          </p>
        </div>
        <div>
          {posts.map((post, idx) => (
            <Post key={idx} post={post}></Post>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
