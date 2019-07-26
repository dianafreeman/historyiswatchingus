import interact from 'interactjs';
import { onDragMove } from './dom';
import {
  onDragEnter, onDragLeave, onDropDeactivate,
} from './drops';

export const makeDraggable = (selector) => {
  interact(selector)
    .draggable({
      snap: {
        mode: 'anchor',
        range: Infinity,
        endOnly: true,
        targets: [],
        elementRect: {
          top: 0, left: 0, bottom: 1, right: 1,
        },
      },
      onmove: onDragMove,
    });
};

export const makeDroppable = (selector, acceptSelector = '.card', dropHandler) => {
  interact(selector)
    .dropzone({
    // only accept elements matching this selector
      accept: acceptSelector,
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,
      // listen for drop related events (see ./events):
      ondragenter: onDragEnter,
      ondragleave: onDragLeave,
      ondropdeactivate: onDropDeactivate,
      ondrop: dropHandler,
    });
};
