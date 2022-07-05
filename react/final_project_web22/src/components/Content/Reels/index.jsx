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
        name: 'yoorana'
    },
  
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
        name: 'yoorana'
    },
    // {
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYomQF3nKcpugHMjvDUPM1ftc5NiexOhSmxA&usqp=CAU",
    //     name: 'yoorana'
    // },

    // chưa scroll được story
    // có xét width cố định cho str, header ko?
  
]

function Reels() {
    return (
        
            storyAccount.map((account, index) =>
        
            <div key={account.index}
                className="px-2 py-0"
            >
                <img 
                    src={account.image}
                    className='w-[56px] h-[56px] rounded-full border-2 border-[#df3968]' />
                <p className="text-xs max-w-[60px] text-center overflow-hidden">{account.name}</p>
                
            </div>
        )
    )
}

export default Reels;