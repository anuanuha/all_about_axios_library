import React from "react";
import propTypes from "prop-types";

export const Person = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="p-6 max-w-sm w-full bg-blue-300 rounded-xl shadow-md">
      <div className="text-lg font-semibold text-gray-800">
        <h1 className="text-2xl font-bold">Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Married: {props.isMarried ? "Yes" : "No"}</h1>
        <h1>Friends:</h1>
        <ol className="list-disc list-inside text-gray-600">
          {props.friend.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
};
Person.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    isMarried:propTypes.bool,
    friend:propTypes.arrayOf(propTypes.string)
}
