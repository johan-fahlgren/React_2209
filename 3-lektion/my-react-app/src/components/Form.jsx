import React, { useEffect, useState } from "react";

const Form = ({ formTitle }) => {
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

  const [name, setName] = useState("");
  const [docTitle, setDocTitle] = useState(`Hi, ${name}`);
  const [showChildComp, setShowChildComp] = useState(true);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return (
    <div>
      <h1>{formTitle}</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setDocTitle(`Hi, ${name}`)}>Submit</button>
      {showChildComp && <ChildComp />}

      <button onClick={() => setShowChildComp(!showChildComp)}>
        Toggle child component
      </button>
    </div>
  );
};

const ChildComp = () => {
  useEffect(() => {
    console.log("Child component has been mounted");

    return () => {
      console.log("this is cleanup");
    };
  }, []);

  return <div>I am a child component</div>;
};

export default Form;
