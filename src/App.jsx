import { useRef, useState } from "react";
import "./App.css";

import { DynamicForm } from "./constant";

import FormWrapper from "./FormWrapper";

function App() {
  const [userData, setUserData] = useState(DynamicForm);

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('myForm');
    const formdata = new FormData(form);

    console.log([...formdata.entries()]);
  }

  function handleChange({ value, name, index }) {
    const oldData = [...userData];

    oldData[index].value = value;
    if (oldData[index].validator) {
      oldData[index].error = oldData[index].validator(value);
    }

    setUserData(oldData);
  }


  return (
    <div>
      <br />


      <FormWrapper
        inputs={userData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;