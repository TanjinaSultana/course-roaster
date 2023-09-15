/* eslint-disable react/prop-types */


const Cards = ({course}) => {
    console.log(course);
    const {id,cover,title,description,price,credit} = course;
 
    return (
        <div className="">
            <div className="card w-[312px] h-[400px] shadow-xl">
  <figure><img className="w-[280px] h-[144px] rounded-xl mb-0" src={cover} alt={`${title} no ${id}`} /></figure>
  <div className="  m-4">
    <h2 className="card-title text-lg font-semibold  ">{title}</h2>
    <p className="font-normal text-sm mt-2">{description}</p>
    <div className="grid grid-cols-2 gap-4 mt-4">
        <p className="text-base font-normal">$ Price : {price}</p>
        <p className="text-base font-normal">Credit : {credit} hr</p>
    </div>
    <div className="card-actions justify-center mt-8 ">
      <button className="btn btn-primary px-[120px]">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;