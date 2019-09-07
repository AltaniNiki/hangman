import React from 'react';
import './word.css';




const  Word =(props)=>{

    // const selected = selectWordArray.map((word)=>{
        
    //     return(
    //         <div className="hold" key={selectWordArray.length}>
    //                 {word}
    //         </div>
    //     );
    // });
    
    return (
        <div className="wordHold">
           
            {
                props.words.map((word)=>
                   
                    (
                        <div className="hold" >
                                {word.active?word.value:'_'}
                        </div>
                    )
                )
            }
            
        </div>
    )



  
}  

export default Word;