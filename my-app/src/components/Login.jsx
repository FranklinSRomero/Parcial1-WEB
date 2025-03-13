import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError('Debes ingresar email y password');
      return;
    }
    setError('');
    setSuccess('');
    //se debe verificar logitud de la password entre 5 y 8 caracteres

    //no es necesario verificar email, solo password
    if (password.length < 5 || password.length > 8) {
      setError('La contraseña debe tener entre 5 y 8 caracteres');
      return;
    }
    setError('');
    setSuccess('Login exitoso');
  };

  return (
    <div className="flex h-screen">
      {/* Lado izquierdo - Imagen */}
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Login background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Lado derecho - Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="w-full max-w-md px-8">
          <h2 className="text-3xl font-bold text-center mb-10">
            Iniciar sesión
          </h2>

          <div className="mb-6">
            <input
              type="email"
              placeholder="username"
              className="w-full p-3 mb-2 bg-transparent border-2 border-white rounded-lg text-white placeholder-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 mb-2 bg-transparent border-2 border-white rounded-lg text-white placeholder-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-blue-300 hover:text-blue-200">
              Forgot your Password?
            </a>
          </div>

          <button
            className="w-full bg-transparent border-2 border-white text-white p-3 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            onClick={handleLogin}
          >
            Login
          </button>

          {error && <p className="text-red-400 text-center mt-4">{error}</p>}
          {success && (
            <p className="text-green-400 text-center mt-4">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
}
