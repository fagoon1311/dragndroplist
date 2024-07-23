import './App.css';
import {useState} from 'react'
function App() {
  const [tasks, setTasks] = useState([
    { 
      name: "STORY-4513: Add tooltip",
      category: "wip", 
      bgcolor: "lightblue"
    },
    {
      name: "STORY-4547: Fix search bug",
      category: "wip",
      bgcolor: "lightgrey",
    },
    {
      name: "STORY-4525: New filter option",
      category: "complete",
      bgcolor: "lightgreen",
    },
    {
      name: "STORY-4526: Remove region filter",
      category: "complete",
      bgcolor: "#ee9090",
    },
    {
      name: "STORY-4520: Improve performance",
      category: "complete",
      bgcolor: "#eeed90",
    },
  ])

  const onDragStart = (e, name) => {
    e.dataTransfer.setData("name", name)
  }

  const onDrop = (e, category) => {
    let id = e.dataTransfer.getData("name")
    let newTasks = tasks.map((task) =>
      task.name === id ? { ...task, category } : task
    );
  
    setTasks([...newTasks])
  }

  return (
    <div className="App flex flex-col">
      <h1 className='text-2xl font-bold bg-yellow-100 text-center p-5'>Drag Drop Lists</h1>
      <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col bg-slate-100 m-10  rounded-lg h-[20rem] w-[20rem]' onDrop={(e)=>onDrop(e, 'wip')} onDragOver={(e)=>e.preventDefault()}>
          <h1 className='font-bold text-2xl text-center'>In progress</h1>
          {
            tasks.map((item)=>{
              if(item.category === 'wip'){
               return <div className={`px-2 py-4 m-2  rounded-lg`} style={{ backgroundColor: item.bgcolor }} draggable onDragStart={(e)=>onDragStart(e, item.name)}>{item.name}</div>
              }
            })
          }
        </div>
        <div className='flex flex-col bg-slate-100 m-10  rounded-lg h-[20rem] w-[20rem]' onDrop={(e)=>onDrop(e, 'complete')} onDragOver={(e)=>e.preventDefault()}>
          <h1 className='font-bold text-2xl text-center'>Completed</h1>
          {
            tasks.map((item)=>{
              if(item.category === 'complete'){
               return <div className={`px-2 py-4 m-2  rounded-lg`} style={{ backgroundColor: item.bgcolor }} draggable onDragStart={(e)=>onDragStart(e, item.name)}>{item.name}</div>
              }
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
