import {useState} from 'react'
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

const App = () => {
  const [queue, setQueue] = useState([])

  const addToQueue = (customer) => {
    setQueue([...queue, customer])
  }
  const removeFromQueue = (id) => {
    const newQueue = queue.filter((item) => item.id !== id)
    setQueue(newQueue)
  }
  const updateStatus = (id, status) => {
    const newQueue = queue.map((item) => {
      if (item.id === id) {
        return { ...item, status }
      }
      return item
    })
    setQueue(newQueue)
  } 

  return (
    <div className="container p-5 bg-mist-900 min-h-screen min-w-screen ">
      <header>
        <h1 className="text-center text-blue-400 font-bold text-3xl">Queue Management System</h1>
        <p className="text-center text-gray-500 mt-2">Manage your customers efficiently </p>
      </header>
      <main className='flex gap-4 mx-50 mt-10 lg:flex-row flex-col items-center justify-center'>
        <QueueForm onAdd={addToQueue} />
        <div className="bg-mist-700 flex flex-col w-2/3 rounded-lg gap-1 h-auto p-4">
            <h2 className="text-2xl font-bold text-blue-400 px-4 pb-2">Current Queue</h2>
            
        {
          queue.length === 0 ? (
            <div className="bg-mist-700 flex flex-col w-2/3 rounded-lg items-center justify-center text-gray-400">
              <p className="text-xl font-semibold">No customers in queue</p>
              <p className="text-sm mt-2">Add customers using the form on the left</p>
            </div>
          ) : (
            queue.map((customer) => (
              <QueueDisplay key={customer.id} queue={customer} onRemove={removeFromQueue} onUpdateStatus={updateStatus} />
            ))
          )
        }
        </div>
      </main>
    </div>
  )
}

export default App