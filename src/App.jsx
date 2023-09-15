
//import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import List from './components/courselist/List'
import Card from './components/card/Card'




function App() {
  //const [course,setCourse]= useState([]);

  return (
    <div>
     <Header></Header>
     <div className=' md:2/3 max-w-7xl mx-auto'>
     <Card></Card>
     
   
     </div>
    </div>
  )
}

export default App
