/* eslint-disable react/prop-types */


const Lists = ({course,count}) => {
    const {title} = course;
    //console.log(count);
    return (
        <div>
            <div className="">
                <ol>

                <li className="text-[grey] mb-2"> {`${count} ${title}`}</li>
                
                </ol>
               
                
                </div>
               
        </div>
    );
};

export default Lists;