/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";



const Card = ({handleAdd,handlePrice}) => {
    const [course,setCourse] = useState([])
    console.log(handleAdd);
    useEffect(() =>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    
       
    return (
        <div>
            <h1>{course.length}</h1>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

            {
                
                course.map((course) => <Cards 
                key={course.id}
                course={course}
                handleAdd={handleAdd}
                handlePrice={handlePrice}
               
                ></Cards>)
            }
            </div>
        </div>
    );
};

export default Card;