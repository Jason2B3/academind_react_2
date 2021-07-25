import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  // Make the user's input to the form stateful
  const [enteredValue, setEnteredValue] = useState("");
  // Update enteredValue when the user types something in the field
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  // On submit, run addGoalHandler in App.js & clear fields
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // If input is not valid...
    if (enteredValue.trim().length === 0) {
      setValidInput(false); // change the input to false, which induces red text
      return;
    }
    // If input is valid...
    setValidInput(true); // change the input to false, which induces red text
    props.onAddGoal(enteredValue); // run addGoal handler
    setEnteredValue(""); // clear fields
  };

  //————————————————————————————————————————————————————————————————————————————————————————————
  // Make whether the type of input is valid or not stateful
  const [validInput, setValidInput] = useState(true);
  //% JSX
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${validInput ? "" : "invalid"}`}>
        {/*If the input's not valid, add the "invalid" class */}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
