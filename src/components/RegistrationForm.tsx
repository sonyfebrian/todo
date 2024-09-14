import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    password: string;
};

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // Proses pengiriman data ke server bisa dilakukan di sini
    };

    return (
        <div className="max-w-md mx-auto mt-2 p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between uppercase items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Registrasi</h2>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4 text-left">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                    <input
                        id="name"
                        {...register('name', { required: 'Nama wajib diisi' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
                </div>

                <div className="mb-4 text-left">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email wajib diisi',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Format email tidak valid'
                            }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
                </div>

                <div className="mb-6 text-left">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', {
                            required: 'Password wajib diisi',
                            minLength: {
                                value: 8,
                                message: 'Password harus minimal 8 karakter'
                            }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Kirim
                </button>
            </form>
        </div>

    );
}

export default RegistrationForm;
