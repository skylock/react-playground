import React, { useState, useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('umount');
    };
  });
  return <div>Hello Functional Component</div>;
};

export default Hello;
