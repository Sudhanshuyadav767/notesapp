import { useState } from 'react'

import './App.css'

function App() {
  
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")
const [tasks, setTasks] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...tasks];

    setTasks(copyTask)
    copyTask.push({ title, description })
    console.log(copyTask)
    // console.log("Form submitted with title:", title, "and description:", description)
    setTitle("")
    setDescription("")
  }

  return (
    <>
      <div className='bg-black w-full h-screen'>
        <div className='flex h-screen' >
        <div className='p-4 flex flex-col gap-4 w-200 mx-2 pt-10 lg:w-1/2'>  
      <input 
      className='h-20  border-2 border-gray-400 rounded-2xl text-white text-2xl px-4 outline-0'
      type="text"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      placeholder='Enter your note here...' />
    
      <textarea 
      className='h-40 border-2 border-gray-400 rounded-2xl text-white text-2xl px-4 outline-0'
      placeholder='Enter Description' name="text" id=""
      value={description}
      onChange={(e) => {
        setDescription(e.target.value)
      }}></textarea>

      <button className='bg-red-400 text-white px-4  h-20 text-4xl rounded-2xl'
      onClick={submitHandler}
      >Add Notes</button>
        </div>
        {/* { Your Notes Section } */}
        <div className='  lg:w-1/2 bg-gray-900 p-10'>
          <h1 className=' text-red-400 text-2xl font-bold flex justify-center'>Your Notes</h1>
          <div className='flex flex-wrap gap-5 h-full overflow-y-auto p-4'>

            {tasks.map(function (elem, index) {
             return (
              <div key={index} className='rounded-2xl flex flex-col gap-1 w-50 h-60 px-4 py-2 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover bg-no-repeat'>
                <h1 className='text-xl font-extrabold p-2 mt-4'>{elem.title}</h1>
                <p className='py-1 px-2  text-gray-500 font-stretch-ultra-condensed'>{elem.description}</p>
                <button className='bg-red-500 text-white px-2 py-1 rounded-lg  w-40 self-end mt-22'
                onClick={() =>{
               const copyTask = [...tasks]
               copyTask.splice(index,1)
               setTasks(copyTask)
                }
                }>Delete</button>
              </div>
             )
            }
           
            )}

            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
