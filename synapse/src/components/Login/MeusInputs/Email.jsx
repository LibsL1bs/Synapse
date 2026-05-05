export default function Email() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-300 mt-7 text-sm">Email</label>
      
      <input
        type="email"
        placeholder="Coloque seu email..."  value={name}
                    onChange={(e) => setName(e.target.value)}
        className="bg-gray-900 text-white px-10 py-2 rounded-md 
        border border-gray-700 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition"
      />
    </div>
  );
}