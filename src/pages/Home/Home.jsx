import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import Doctors from "../../components/Doctors/Doctors";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <Doctors data={data}></Doctors>
    </>
  );
};

export default Home;
