
import { useParams, Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

function TaskDetail() {
    const { id } = useParams<{ id: string }>();
    const { tasks } = useTasks();
    const task = tasks.find(t => t.id === Number(id));
    if (!task) {
        return <div className="text-center mt-8">Tugas tidak ditemukan</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Detail Tugas</h2>
            <table className="w-full mb-6">
                <thead>
                    <tr className="bg-gray-100 uppercase">
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">ID Tugas</th>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">Judul Tugas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b text-left ">
                        <td className="py-2 px-4 text-gray-800">{task.id}</td>
                        <td className="py-2 px-4 text-gray-800">{task.title}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Kembali ke Daftar Tugas
            </Link>
        </div>
    );
}

export default TaskDetail;
