import { Check, Trash } from 'phosphor-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import styles from './Tasks.module.css';

interface Tasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: Tasks[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Tasks({ tasks, toggleTaskCompletion, deleteTask }: TasksProps) {
  const [parent] = useAutoAnimate();

  return (
    <ul className={styles.tasks} ref={parent}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.taskItem}>
          <label
            htmlFor={`task-${task.id}`}
            data-iscompleted={task.isCompleted}
          >
            {task.isCompleted ? <Check size={10} weight="bold" /> : ''}
          </label>
          <input
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.isCompleted}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span data-iscompleted={task.isCompleted}>{task.title}</span>
          <button type="button" onClick={() => deleteTask(task.id)}>
            <Trash size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}
