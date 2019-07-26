/* eslint-disable react/no-array-index-key */
import React from 'react';
import propTypes from 'prop-types';
import Column from './Column';
/**
 *  Board Component
 *
 *  Pure Function
 *  @returns dynamically created board. Funnels state events to related components.
 */


const Board = ({
  tasks, columns, handleCardDrop, handleCheckboxChange, handleDeleteClick,
}) => (
  <div className="board row">
    {columns.map((col, index) => (
      <Column
        classList={`col col-${index}`}
        key={`col${index}`}
        index={index}
        title={col}
        tasks={tasks.filter(task => task.column === index)}
        handleDeleteClick={handleDeleteClick}
        handleCardDrop={handleCardDrop}
        handleCheckboxChange={handleCheckboxChange}
      />
    ))}
  </div>
);

export default Board;

Board.propTypes = {
  tasks: propTypes.arrayOf(propTypes.object).isRequired,
  columns: propTypes.arrayOf(propTypes.string).isRequired,
  handleCardDrop: propTypes.func.isRequired,
  handleCheckboxChange: propTypes.func.isRequired,
  handleDeleteClick: propTypes.func.isRequired,
};
