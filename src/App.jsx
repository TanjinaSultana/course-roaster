
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/courselist/List'
import Card from './components/card/Card'




function App() {
  
  const [courseAdd,setCourseAdd]= useState([]);
  const [countAdd,setCountAdd]= useState(0);
  let priceAdd = countAdd;
     const handleAdd =(course) =>{
      console.log(course);
      const newCourse = [...courseAdd,course];
      setCourseAdd(newCourse)
      
    }
    const handlePrice = (price) =>{
   
      priceAdd = priceAdd + price;

      setCountAdd(priceAdd);
    }
     

  return (
    <div>
     <Header></Header>
     <div className=' md:2/3 max-w-7xl mx-auto  flex'>
     <Card handleAdd={handleAdd} handlePrice={handlePrice}></Card>
     <List courseAdd={courseAdd} countAdd={countAdd}></List>
   
     </div>
    </div>
  )
}

export default App
