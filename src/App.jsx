
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/courselist/List'
import Card from './components/card/Card'




function App() {
  
  const [courseAdd,setCourseAdd]= useState([]);
  //const [count,setCount]= useState(0);
     const handleAdd =(course) =>{
      const newCourse = [...courseAdd,course];
      setCourseAdd(newCourse)
      
     }
     
     

  return (
    <div>
     <Header></Header>
     <div className=' md:2/3 max-w-7xl mx-auto  flex'>
     <Card handleAdd={handleAdd} ></Card>
     <List courseAdd={courseAdd} ></List>
   
     </div>
    </div>
  )
}

export default App
