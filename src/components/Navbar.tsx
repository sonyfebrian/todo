import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-200 font-semibold">
                            Daftar Tugas
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white hover:text-blue-200 font-semibold">
                            Formulir Pendaftaran
                        </Link>
                    </li>
                    {/* Anda bisa menambahkan link navigasi lainnya di sini */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
