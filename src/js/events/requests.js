
export const getTasks = () => fetch('/tasks/', {
  method: 'get',
}).then(res => res.json());

export const addTask = ({ title, column, isComplete }) => fetch(`/tasks/${title}/${column}/${isComplete}`, {
  method: 'post',
}).then(res => res.json());


export const updateTask = ({ id, key, value }) => fetch(`/tasks/${id}/${key}/${value}`, {
  method: 'put',
}).then(res => res.json());


export const deleteTask = id => fetch(`/tasks/${id}`, {
  method: 'delete',
}).then(res => res.json());
