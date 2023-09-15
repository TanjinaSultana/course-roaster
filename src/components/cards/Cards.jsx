/* eslint-disable react/prop-types */


const Cards = ({course}) => {
    console.log(course);
    const {id,cover,title,description,price,credit} = course;
 
    return (
        <div className="">
            <div className="card w-[312px] h-[400px] shadow-xl">
  <figure><img className="w-[280px] h-[144px] rounded-xl" src={cover} alt={`${title} no ${id}`} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="grid grid-cols-2 gap-4">
        <p>$ Price : {price}</p>
        <p>Credit : {credit} hr</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;