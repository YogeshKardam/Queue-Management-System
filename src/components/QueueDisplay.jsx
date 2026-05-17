export default function QueueDisplay({ queue,onRemove, onUpdateStatus }) {
    return (
        <div className="flex flex-row justify-between bg-mist-800 mx-4 rounded-lg">
            <div className="flex flex-col p-3 text-white ">
                <h3 className="text-lg font-semibold">{queue.name}</h3>
                <p className="text-gray-400">Service: {queue.service}</p>
                <p className={`text-gray-400 ${queue.status === 'waiting' ? 'text-yellow-500' : queue.status === 'serving' ? 'text-blue-500' : 'text-green-500'}`}>
                    {queue.status}
                </p>
            </div>
            <div className="flex flex-row gap-2 my-auto px-2 text-white ">
                {
                    queue.status === 'waiting' && ( <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded" onClick={() => onUpdateStatus(queue.id, 'serving')}>
                    Serve
                </button>)
                }
                {
                    queue.status === 'serving' && ( <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => onUpdateStatus(queue.id, 'completed')}>
                    Complete
                </button>)
                }                
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded" onClick={() => onRemove(queue.id)}>
                    X
                </button>
            </div>
        </div>
    )
}