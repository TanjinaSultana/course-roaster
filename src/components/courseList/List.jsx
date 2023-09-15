/* eslint-disable react/prop-types */

import Lists from "../list/Lists";
const List = ({courseAdd}) => {
    //console.log(count);
    let count = 1;
    return (
        <div>
           <h1>list: {courseAdd.length} </h1>
           {
            courseAdd.map((course,idx) => <Lists key={idx} course={course}  count ={count++}></Lists>)
           }

        </div>
    );
};

export default List;