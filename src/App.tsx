import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TaskDetail from './components/TaskDetail';
import RegistrationForm from './components/RegistrationForm';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <Router>
      <TaskProvider>
        <div className=" bg-gray-100 min-h-screen">
          <Navbar />
          <main className="container mx-auto mt-8 p-4">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/task/:id" element={<TaskDetail />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;
