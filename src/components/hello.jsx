import React, { useState, useEffect } from "react";

const hello = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  });
  return <div>Hello Component</div>;
};

export default hello;
