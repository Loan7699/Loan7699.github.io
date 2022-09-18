

function Image({ id }) {
    console.log(id);
    return (
        <div className="cursor-pointer overflow-auto">
            <img src={`status/${id}.jpg`} alt="img-status" className=" w-[38.5rem]"/>
        </div>
    )
}

export default Image