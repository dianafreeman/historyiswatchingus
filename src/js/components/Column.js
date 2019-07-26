import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

/**
 *  Column Component
 *
 *  Pure Function
 *  @returns dynamically created column from colItem
 */

const Column = ({
  tasks, title, index, handleCheckboxChange, handleCardDrop, handleDeleteClick,
}) => (
  <div
    data-col-id={index}
    className={`col col-${index}`}
    onDrop={handleCardDrop}

  >
    <h2 className="text-center py-3">{title}</h2>
    {tasks.map(task => (
      <Card
        key={task.id}
        task={task}
        onDeleteClick={handleDeleteClick}
        handleCheckboxChange={handleCheckboxChange}
      />
    )) }
  </div>
);
export default Column;


Column.propTypes = {
  tasks: propTypes.array.isRequired,
  index: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  handleCheckboxChange: propTypes.func.isRequired,
  handleCardDrop: propTypes.func.isRequired,
  handleDeleteClick: propTypes.func.isRequired,
};
