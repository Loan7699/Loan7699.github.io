const storyAccount = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'parkhesooofficial'
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'parkhesooofficial'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'parkhesooofficial'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },
  
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },

    // chưa scroll được story
    // có xét width cố định cho str, header ko?
  
]

function Reels() {
    return (
        
            storyAccount.map((account, index) =>
            <div className=" mr-8" key={index}>
                <div key={index}
                    className="py-0 w-[56px]"
                >
                    <img 
                        src={account.image}
                        className='w-[56px] h-[56px] rounded-full border-2 border-[#df3968]' />
                    <p className="text-xs max-w-[60px] text-center overflow-hidden scrollbar-hide">{account.name}</p> 
                </div>
            </div>
        
            
        )
    )
}

export default Reels;