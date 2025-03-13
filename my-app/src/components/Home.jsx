import { FaCamera, FaMap, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const goToCamera = () => {
    navigate('/Menu');
  };

  const goToMap = () => {
    navigate('/map');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('http://dummyimage.com/1920x1080.png/cc0000/ffffff')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="p-4 rounded-lg">
        {/* Contenedor negro para agrupar visualmente los iconos */}
        <div className="bg-black bg-opacity-80 rounded-md p-6">
          {/* Grupo de iconos */}
          <div className="flex items-center justify-between gap-14">
            <button onClick={goToCamera} className="text-white">
              <FaCamera size={120} />
            </button>
            <button onClick={goToMap} className="text-white">
              <FaMap size={120} />
            </button>
            <button onClick={goToProfile} className="text-white">
              <FaUser size={120} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
