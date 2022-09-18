
function Status( {name} ) {
    return (
        <div className="mb-5">
            <div className="flex mb-1">
                <p className="font-semibold text-sm cursor-pointer">{name}</p>
                <p className="text-sm ml-0.5">MoneyHeistKorea_JointEconomicArea</p>
            </div>
            <p className="text-left cursor-pointer text-sm font-normal text-[#8E8E8E] mb-2">View all <span>803</span> comments</p>
            <div className="mb-4 text-left text-[10px] text-[#8E8E8E]">1 DAY AGO</div>
        </div>
    )
}

export default Status;