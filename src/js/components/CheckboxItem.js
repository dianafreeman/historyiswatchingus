/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable prefer-const */
// disabled, because we need the input > label structure for the bootswatch checkboxes to work


import React from 'react';
import propTypes from 'prop-types';
/**
 * Checkbox Item Component
 *
 * Pure Function
 *
 * @returns Component with input checkbox, and label, styled for Bootswatch
 */

const CheckboxItem = ({
  isComplete, onCheckboxChange, taskId,
}) => {
  const badgeClasses = `badge badge-${(isComplete === 'true' ? 'success' : 'danger')}`;
  const statusText = (isComplete === 'true' ? 'Complete' : 'Incomplete');
  const checkedAttr = (isComplete === 'true');
  return (
    <div className={badgeClasses}>
      <div className="custom-control custom-checkbox">
        <input
          id={`isComplete-${taskId}`}
          name={taskId}
          type="checkbox"
          defaultChecked={checkedAttr}
          className="custom-control-input"
          onChange={onCheckboxChange}
        />
        <label className="custom-control-label" htmlFor={`isComplete-${taskId}`}>
          {statusText}
        </label>


      </div>
    </div>
  );
};

export default CheckboxItem;

CheckboxItem.propTypes = {
  taskId: propTypes.number.isRequired,
  isComplete: propTypes.string.isRequired,
  onCheckboxChange: propTypes.func.isRequired,
};
