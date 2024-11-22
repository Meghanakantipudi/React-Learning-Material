import React from 'react'

function Banner() {
  return (
    <div className="relative w-full h-[75vh] bg-cover bg-center" style={{backgroundImage: "url('https://thesectorm.blog/wp-content/uploads/2022/04/endgame-title-card.jpg')"}}>
        <div className="flex items-center justify-center absolute  bottom-3 bg-blue-900/70 w-full h-10 text-white font-bold text-2xl">
            Avengers End Game</div>
        
    </div>
  )
}

export default Banner
