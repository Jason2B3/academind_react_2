import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styled from "styled-components";
const FormControl = styled.div`
  margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? "black" : "red")}; //# prop-set style
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.isValid ? "#ccc" : "red")}; //# prop-set style
    background: ${(props) =>
      props.isValid ? "white" : "#fad0ec"}; //# prop-set style
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  & button {
    width: 100%;
  }
  
`;

const CourseInput = (props) => {
  //~ Make stateful section >>>
  // user's input to the form
  const [enteredValue, setEnteredValue] = useState("");
  // whether the type of input is valid or not
  const [validInput, setValidInput] = useState(true);

  //~ Handler section >>>
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
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={validInput}>
        {/*We send whether the input is valid up to this comp ƒ()'s prop*/}
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
