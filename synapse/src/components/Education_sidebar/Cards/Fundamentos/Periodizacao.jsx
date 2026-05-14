import { useState } from "react";

function Periodizacao() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="flex items-center" onClick={() => setOpen(true)}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/495/484/small/black-cardboard-arrow-transparent-png.png" alt="" width={100} />
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl relative min-w-300px">
                        <button 
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ✕
                        </button>
                        <h1 className="text-2xl font-bold mt-2">teste</h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default Periodizacao;