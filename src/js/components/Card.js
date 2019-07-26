import React from 'react';
import propTypes from 'prop-types';
import CheckboxItem from './CheckboxItem';
/**
 *  Card Component
 *
 *  Pure Function
 *  @returns Component with state handlers as properties
 */

const Card = ({ onDeleteClick, handleCheckboxChange, task }) => {
  const { title, id, isComplete } = task;

  return (
    <div data-task-id={id} className="card">
      <div className="card-header">
        <p>{title}</p>
        <button className="delete-btn btn" type="submit" data-task-id={id} onClick={onDeleteClick}>X</button>
      </div>
      <div className="card-body">
        <CheckboxItem isComplete={isComplete} taskId={id} onCheckboxChange={handleCheckboxChange} />
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  task: propTypes.object.isRequired,
  handleCheckboxChange: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired,
};
