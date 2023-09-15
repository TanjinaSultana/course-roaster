/* eslint-disable react/prop-types */


const Lists = ({course,count}) => {
    const {title} = course;
    //console.log(count);
    return (
        <div>
            <ol><li> {`${count} ${title}`}</li></ol>
        </div>
    );
};

export default Lists;