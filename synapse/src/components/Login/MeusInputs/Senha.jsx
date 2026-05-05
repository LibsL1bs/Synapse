

export default function Senha() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-300 text-sm">Senha</label>
      
      <input
        type="password"
        placeholder="Coloque sua senha..." 
        className="bg-gray-900 text-white px-4 py-2 rounded-md 
        border border-gray-700 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition"
      />
    </div>
  );
}