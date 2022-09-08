import React, { useEffect, useState } from "react";

const Form = ({ formTitle }) => {
  const [name, setName] = useState("");

  /*  useEffect(() => {
    console.log("component was mounted or updated");
  }); // Trigger every time a component is updated or mounted

  useEffect(() => {
    console.log("component was mounted");
  }, []); // [] = Trigger only once

  useEffect(() => {
    console.log("The prop ''formTitle'' has changed");
  }, [formTitle]); //Triggerd when specific component has mounted or updated

  useEffect(() => {
    console.log("The prop ''formTitle or name'' has changed");
  }, [formTitle, name]); //Triggerd when specific components has mounted or updated */

  useEffect(() => {
    document.title = `hi, ${name}`;
  }, [name]);

  return (
    <div>
      <h1>{formTitle}</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Form;
