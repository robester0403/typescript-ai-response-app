import React from "react";
import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <ChildAsFC
        color="green"
        onClick={() => console.log("this is an onclick")}
      >
        hello
      </ChildAsFC>
    </div>
  );
};

export default Parent;
