import React, { useState, useEffect } from "react";

const hello = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("umount");
    };
  });
  return <div>Hello Component</div>;
};

export default hello;
