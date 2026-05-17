import { useState } from 'react'

export default function QueueForm({ onAdd }) {
    const [name, setName] = useState('')
    const [service, setService] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !service) {
            setError('Please fill in all fields')
            return
        }
        onAdd({ name, service, status: 'waiting',id: Date.now() })
        setName('')
        setService('')
        setError('')
    }

    return (
        <>
            <div className="bg-mist-700 flex flex-row rounded-lg h-1/4 text-white">
                <form onSubmit={handleSubmit} className="flex flex-col p-4 ">
                    <h2 className="text-xl font-bold mb-2 text-blue-400">Add to Queue</h2>
                    {error && <p className="text-red-400 bg-red-500/24 rounded-xl text-center py-0.5 px-1 text-sm text-semibold mb-2">{error}</p>}
                    <input type="text" placeholder="Customer Name" className="w-full p-2 mb-4 rounded border border-gray-400 bg-mist-800 outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                    <select name="service" className="w-full p-2 mb-4 rounded bg-mist-800 border border-gray-400 outline-none" value={service} onChange={(e) => setService(e.target.value)}>
                        <option value="">Select Service</option>
                        <option value="payment">Payment</option>
                        <option value="consultation">Consultation</option>
                    </select>
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Customer</button>
                </form>
            </div>
        </>
    )
}