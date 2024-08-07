import React from "react";
import Message from "../components/Message";
import TextCountBox from "../components/TextCountBox";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Message />

      <TextCountBox />
    </>
  );
};
export default Home;
