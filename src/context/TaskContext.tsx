import React, { createContext, useState, useContext } from 'react';
import { Task } from '../types/Task';

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Belajar React', },
        { id: 2, title: 'Belajar React Router', },
    ]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a TaskProvider');
    }
    return context;
};
