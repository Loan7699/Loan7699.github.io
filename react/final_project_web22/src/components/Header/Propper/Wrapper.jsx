function Wrapper( {children}) {
    // box-shadow chưa đc
    return (
        <div className="bg-[#FFFFFF] rounded-md w-full h-full shadow-lg pt-2">
                        {children}
        </div>
    )
}

export default Wrapper;
// shadow-[0_0px_2px_12px_rgba(0,0,0,0.12)