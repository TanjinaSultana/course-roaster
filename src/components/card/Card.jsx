/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";



const Card = ({handleAdd}) => {
    const [course,setCourse] = useState([])
   
    useEffect(() =>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    
       
    return (
        <div>
            
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">

            {
                
                course.map((course) => <Cards 
                key={course.id}
                course={course}
                handleAdd={handleAdd}
              
               
                ></Cards>)
            }
            </div>
        </div>
    );
};

export default Card;