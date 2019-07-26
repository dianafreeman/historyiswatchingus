import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import Form from './components/Form';
import {
  getTasks, updateTask, addTask, deleteTask,
} from './events/requests';
import { sendFormSubmit, onCheckboxChange } from './events/dom';
import { makeDraggable, makeDroppable } from './events/interactions';
import { onDrop } from './events/drops';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      columns: [],
      error: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCardDrop = this.handleCardDrop.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.setState({ columns: ['Research', 'Staging', 'Launch'] }); // Set Columns
    makeDraggable('.card'); // @param: draggableElement selector
    makeDroppable('.col', '.card', this.handleCardDrop); // @params: { dropZoneSelector, acceptSelector, dropHanlder}
    // Populate board with tasks
    getTasks()
      .then(tasks => this.setState({ tasks: [...tasks] }));
  }

  handleDeleteClick(event) {
    event.preventDefault();
    const taskId = event.target.getAttribute('data-task-id');
    deleteTask(taskId)
      .then(tasks => this.setState({ tasks: [...tasks] }));
  }

  handleCardDrop(event) {
    onDrop(event)
      .then(params => updateTask(params))
      .then(tasks => this.setState({ tasks: [...tasks] }));
  }

  handleFormSubmit(event) {
    sendFormSubmit(event)
      .then(params => addTask(params))
      .then(tasks => this.setState({ tasks: [...tasks] }))
      .catch((err) => {
        const error = `${err}`;
        this.setState({ error });
      });
  }


  handleInputChange(event) {
    event.preventDefault();
    const { value } = event.target;
    const newState = (value.length < 1 ? { error: 'Enter a title for this task' } : { error: null });
    this.setState(newState);
  }

  handleCheckboxChange(event) {
    onCheckboxChange(event)
      .then(params => updateTask(params))
      .then(tasks => this.setState({ tasks: [...tasks] }));
  }


  render() {
    const { error, tasks, columns } = this.state;
    return (
      <div className="container-fluid">
        <div className="masthead row mt-4 mb-4">
          <div className="col-sm-6">
            <h1 className="mt-4 text-center"> KanBan To Do </h1>
          </div>
          <div className="col-sm-6">
            <Form
              sendFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              formError={error}
            />
          </div>
        </div>
        <Board
          tasks={tasks}
          handleDeleteClick={this.handleDeleteClick}
          columns={columns}
          handleCheckboxChange={this.handleCheckboxChange}
          handleCardDrop={this.handleCardDrop}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
