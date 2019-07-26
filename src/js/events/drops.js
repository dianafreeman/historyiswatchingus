
export const onDragEnter = (event) => {
  // add the drop feedback style
  event.target.classList.add('drop-active');
};
export const onDragLeave = (event) => {
  // remove the drop feedback style
  event.target.classList.remove('drop-active');
};

export const onDropDeactivate = (event) => {
  // remove active dropzone feedback
  event.target.classList.remove('drop-active');
  event.target.classList.remove('drop-target');
};

export const onDrop = (event) => {
  event.preventDefault();
  const { relatedTarget, target } = event;
  const activeCard = relatedTarget;
  const activeColumn = target;

  // const colHeader = activeColumn.firstChild;

  // Unset transform attribute
  activeCard.style.transform = 'unset';
  activeCard.style.webkitTransform = 'unset';
  activeCard.style['z-index'] = 'unset';

  let result = null;
  if (activeColumn !== activeCard.parentNode) {
    // move card to dropped column
    // activeColumn.insertBefore(activeCard, colHeader.nextSibling);

    const taskId = activeCard.getAttribute('data-task-id');
    const colId = activeColumn.getAttribute('data-col-id');
    result = { id: taskId, key: 'column', value: colId };
  }
  return new Promise((resolve) => {
    if (result) {
      resolve(result);
    }
  });
};
