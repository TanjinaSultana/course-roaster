
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/courselist/List'
import Card from './components/card/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  
  const [courseAdd,setCourseAdd]= useState([]);
  const [countAdd,setCountAdd]= useState(0);
  const [credit,setCredit]= useState(0);
  const [creditHour,setCreditHour]= useState(20);
  let priceAdd = countAdd;
  
  let creditAdd = credit;
  //let creditHour = credit;
     const handleAdd =(course) =>{
      const remainingCourse = courseAdd.find((c) => c.id == course.id);
      if(remainingCourse){
       return toast("Already Booked This course.Please Select Another One")
      }else{
         creditAdd = creditAdd + course.credit;
          const remainingCredit = 20-creditAdd;
          if(creditAdd >20 && remainingCredit<0){
            return toast("Credit Over.")
          }else{
            const newCourse = [...courseAdd,course];
            setCourseAdd(newCourse)
            priceAdd = priceAdd + course.price;
            setCountAdd(priceAdd);
            setCredit(creditAdd)
            setCreditHour(remainingCredit);
          }
            
        
      }
      
    }
    

  return (
    <div>
     <Header></Header>
     <div className=' md:2/3 max-w-7xl mx-auto  flex-row lg:flex'>
     <Card 
      handleAdd={handleAdd}
      
      ></Card>
     <List 
     courseAdd={courseAdd} 
     countAdd={countAdd}
     credit={credit}
     creditHour = {creditHour}
     ></List>
   
     </div>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
