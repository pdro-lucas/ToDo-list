import { FormEvent, useState } from 'react';

import { ClipboardText, PlusCircle } from 'phosphor-react';

import { Header } from './Components/Header';
import { Input } from './Components/Input';
import { Tasks } from './Components/Tasks';

import styles from './App.module.css';

const tasks = [
  {
    id: 1,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer normal',
    isCompleted: false,
  },
  {
    id: 2,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer normal',
    isCompleted: false,
  },
  {
    id: 3,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer normal',
    isCompleted: false,
  },
  {
    id: 4,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer normal',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Integer urna ',
    isCompleted: true,
  },
];

function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [newTask, setNewTask] = useState('');

  function addNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTaskObject = {
      id: taskList.length + 1,
      title: newTask,
      isCompleted: false,
    };

    setTaskList([newTaskObject, ...taskList]);
    setNewTask('');
  }

  function toggleTaskCompletion(id: number) {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
    );

    const updatedTask = updatedTasks.find((task) => task.id === id);

    const remainingTasks = updatedTasks.filter((task) => task.id !== id);

    if (updatedTask && !updatedTask.isCompleted) {
      setTaskList([updatedTask, ...remainingTasks]);
    } else {
      const sortedTasks = remainingTasks.sort(
        (a, b) => +a.isCompleted - +b.isCompleted,
      );
      if (updatedTask) {
        sortedTasks.push(updatedTask);
      }
      setTaskList(sortedTasks);
    }
  }

  function deleteTask(id: number) {
    const remainingTasks = taskList.filter((task) => task.id !== id);
    setTaskList(remainingTasks);
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={addNewTask} className={styles.newTask}>
          <Input
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button>
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <div className={styles.taskList}>
          <div className={styles.taskStatus}>
            <div>
              <span>Tarefas criadas</span>
              <span>{taskList.length}</span>
            </div>
            <div>
              <span>Tarefas concluídas</span>
              <span>
                {taskList.filter((task) => task.isCompleted === true).length} de{' '}
                {taskList.length}
              </span>
            </div>
          </div>

          {taskList.length > 0 ? (
            <Tasks
              tasks={taskList}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
            />
          ) : (
            <div className={styles.noTasks}>
              <ClipboardText size={64} weight="thin" />
              <div>
                <h2>Você ainda não tem tarefas cadastradas</h2>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
