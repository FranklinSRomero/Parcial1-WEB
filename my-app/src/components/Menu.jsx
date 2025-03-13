export default function Menu({ image, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-4 rounded-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl bg-gray-200 px-2 rounded">X</button>
        <img src={image.url} alt="Detalle" className="max-w-full max-h-screen" />
      </div>
    </div>
  );
}
