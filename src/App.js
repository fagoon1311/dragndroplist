import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col">
      <h1 className='text-2xl font-bold bg-yellow-100 text-center p-5'>Drag Drop Lists</h1>
      <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col bg-red-400 m-10  rounded-lg h-[20rem] w-[20rem]'>
          <h1 className='font-bold text-2xl text-center'>In progress</h1>
        </div>
        <div className='flex flex-col bg-green-400 m-10  rounded-lg h-[20rem] w-[20rem]'>
          <h1 className='font-bold text-2xl text-center'>Completed</h1>
        </div>
        
      </div>
    </div>
  );
}

export default App;
