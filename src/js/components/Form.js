import React from 'react';
import propTypes from 'prop-types';
/**
 * Add a Task Form
 *
 * @returns a Form element (from ./components/*.js)
 */
const Form = ({ sendFormSubmit, formError, handleInputChange }) => (
  <form className="form-container-group" id="add-task">
    <div className="form-group">
      <label htmlFor="task-title">
         Task Title
        <input
          className="form-control"
          type="text"
          placeholder="A title goes here"
          name="titleInput"
          onChange={handleInputChange}
        />
        {(formError ? <p className="text-danger">{formError}</p> : null)}
      </label>
    </div>
    <button className="btn btn-info" type="submit" onClick={sendFormSubmit}>Add Task</button>
  </form>
);

Form.defaultProps = {
  formError: '',
};
Form.propTypes = {
  sendFormSubmit: propTypes.func.isRequired,
  formError: propTypes.string,
  handleInputChange: propTypes.func.isRequired,
};
export default Form;
