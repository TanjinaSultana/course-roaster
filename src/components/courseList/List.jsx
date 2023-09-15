/* eslint-disable react/prop-types */

import Lists from "../list/Lists";
const List = ({courseAdd}) => {
    //console.log(count);
    let count = 1;
    return (
        <div className="w-[300px] h-[500px] ml-8 border-2 rounded-lg p-4">
            <h1 className="text-lg font-bold mb-4 text-blue-400">Credit Hour Remaining {} hr</h1>
            <hr className="mt-4 mb-4"></hr>
           <h1 className="text-xl font-bold mb-4">Course Name</h1>
           {
            courseAdd.map((course,idx) => <Lists key={idx} course={course}  count ={count++}></Lists>)
           }
            <div>
      
      <hr className="mt-4"></hr>
      <p className="text-[grey] mt-2">Total Credit Hour : </p>
      <hr className="mt-4"></hr>
      <p className="text-[grey] mt-2">Total Price : </p>
      </div>

        </div>
    );
};

export default List;