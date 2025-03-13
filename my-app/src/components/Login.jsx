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
    //si la
    if (password.length < 5 || password.length > 8) {
      setError('La contraseña debe tener entre 5 y 8 caracteres');
      return;
    }
    setError('');
    setSuccess('Login exitoso');
  };
  //codigo del componente Login
  //exportar html con los campos el boton y el espacio de la imagen
  //exportar el componente

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold text-center mb-4">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md"
          onClick={handleLogin}
        >
          Ingresar
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
      </div>
    </div>
  );
}
