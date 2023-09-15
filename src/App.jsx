
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
        
          const newCourse = [...courseAdd,course];
          setCourseAdd(newCourse)

          priceAdd = priceAdd + course.price;

          setCountAdd(priceAdd);

          creditAdd = creditAdd + course.credit;
          if(creditAdd >20){
            return toast("Credit Over.")
          }else{

            setCredit(creditAdd)
          }
            const remainingCredit = 20-creditAdd;
            // if(remainingCredit>20){
            //   return toast("You can't select credit more than 20")
            // }else{

              setCreditHour(remainingCredit);
            
        
      }
      
    }
    // const handlePrice = (price) =>{
   
    //   priceAdd = priceAdd + price;

    //   setCountAdd(priceAdd);
    // }
    //  const handleCredit = (creditNum) =>{
    // creditAdd = creditAdd + creditNum;
    // setCredit(creditAdd)
    //   const remainingCredit = 20-creditAdd;
    //   setCreditHour(remainingCredit);
    //  }
    

  return (
    <div>
     <Header></Header>
     <div className=' md:2/3 max-w-7xl mx-auto  flex'>
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
