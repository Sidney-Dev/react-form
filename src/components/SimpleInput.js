import React, { useState } from 'react'

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setEnteredNameTouched(true)

    if(!enteredNameIsValid) {
      return
    }

    setEnteredName('')
    setEnteredNameTouched(false)
  }

  // validate action when the input looses focus
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
