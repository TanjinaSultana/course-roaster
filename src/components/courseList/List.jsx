/* eslint-disable react/prop-types */

import Lists from "../list/Lists";
const List = ({courseAdd,countAdd,credit,creditHour}) => {
    //console.log(count);
    
    let count = 1;
    return (
        <div className="card w-[312px] h-[400px]  bg-base-100 shadow-xl mt-4 lg:ml-8 lg:mt-0">
  <div className="p-4 mt-2">
    <h1 className="text-lg font-bold mb-2 text-blue-400">Credit Hour Remaining {creditHour} hr</h1>
            <hr className="mt-2 mb-2"></hr>
           <h1 className="text-xl font-bold mb-2">Course Name</h1>
           {
            courseAdd.map((course,idx) => <Lists 
            key={idx} 
            course={course}  
            count ={count++} 
            
            ></Lists>)
           }
            <div>
      
      <hr className="mt-4"></hr>
      <p className="text-[black] font-semiBold text-base mt-2">Total Credit Hour : {credit} </p>
      <hr className="mt-4"></hr>
      <p className=" font-semiBold text-base mt-2 text-[black]">Total Price : {countAdd}  USD</p>
      </div>
  </div>
  
</div>
    //     <div className=" ml-8 border-2 rounded-lg p-4">
    //     {/* <div className="w-[300px] h-[500px] ml-8 border-2 rounded-lg p-4"> */}
    //         <h1 className="text-lg font-bold mb-4 text-blue-400">Credit Hour Remaining {} hr</h1>
    //         <hr className="mt-4 mb-4"></hr>
    //        <h1 className="text-xl font-bold mb-4">Course Name</h1>
    //        {
    //         courseAdd.map((course,idx) => <Lists key={idx} course={course}  count ={count++} ></Lists>)
    //        }
    //         <div>
      
    //   <hr className="mt-4"></hr>
    //   <p className="text-[grey] font-semiBold text-base mt-2">Total Credit Hour : </p>
    //   <hr className="mt-4"></hr>
    //   <p className=" font-semiBold text-base mt-2">Total Price : {countAdd}  USD</p>
    //   </div>

    
    );
};

export default List;