/* eslint-disable no-unused-vars */
import { useReducer, useState } from 'react';

const HookUseReducer = () => {
  // 1 - Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });
  // 2 - Avançando no useReducer
  const initialTasks = [
    { id: 1, text: 'Fazer alguma coisa.' },
    { id: 2, text: 'Fazer outra coisa' },
  ];
  const taskReducer = (state, action) => {
    if (action.type === 'ADD') {
      const newTask = {
        id: Math.random(),
        text: taskText,
      };
      setTaskText('');
      return [...state, newTask];
    } else if (action.type === 'DELETE') {
      console.log(action);
      return state.filter((task) => task.id !== action.id);
    } else {
      return state;
    }
  };

  const [taskText, setTaskText] = useState('');
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: 'ADD' });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}> Alterar número!</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      <ul>
        {tasks &&
          tasks.map((task, index) => {
            return (
              <li key={index} onDoubleClick={() => removeTask(task.id)}>
                {task.text}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HookUseReducer;
