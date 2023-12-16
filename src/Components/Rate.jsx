import React from 'react'

export default function Rate({movieRate}) {
    // rate 3
    const SetRate=(x)=>{
        var stars=[] ; 
       // 1 2 3 4 5
       //★★★☆☆
        for(var i =1 ; i<=5 ; i++){
            if(i<=x){
                stars.push(<span>★</span>)
            }else{
                stars.push(<span>☆</span>)
            }
        }
        return stars ;
    }


  return (
    <div>
        {SetRate(movieRate)}
    </div>
  )
}
