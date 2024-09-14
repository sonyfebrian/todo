import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

function TodoList() {
    const { tasks, addTask, deleteTask } = useTasks();
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask({ id: Date.now(), title: newTask.trim() });
            setNewTask('');
        }
    };


    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Daftar Tugas</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Tambahkan tugas baru"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddTask}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Tambah
                </button>
            </div>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id} className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors flex justify-between items-center">
                        <Link to={`/task/${task.id}`} className="text-blue-600 hover:text-blue-800">{task.title}</Link>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
