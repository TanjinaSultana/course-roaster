import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";



const Card = () => {
    const [course,setCourse] = useState([])
    useEffect(() =>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    return (
        <div>
            <h1>{course.length}</h1>
            <div className="grid grid-cols-3 gap-10 ">

            {
                course.map((course) => <Cards 
                key={course.id}
                course={course}
                ></Cards>)
            }
            </div>
        </div>
    );
};

export default Card;