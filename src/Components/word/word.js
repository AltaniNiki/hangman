import React from 'react';
import './word.css';

const footballTeams=['AEK','OSFP','PAO','PAOK','Ajax','WORD'];
const programming=['C++','JAVA','JAVASCRIPT','CSS','HTML','RUBY'];
const videoGames=['PRO','FIFA'];
const selectWordArray=[];
var selectedWord ;

const  Word =(props)=>{
     if (props.category === 'footballTeams'){
        selectedWord =footballTeams[Math.floor(Math.random() * footballTeams.length)];
    }else if(props.category==='programming'){
         selectedWord = programming[Math.floor(Math.random() * programming.length)];
    }else if(props.category==='videogames'){
         selectedWord = videoGames[Math.floor(Math.random() * videoGames.length)];
    }

    for (var i=0;i<selectedWord.length;i++){
        selectWordArray.push('_');
     }
    // const selected = selectWordArray.map((word)=>{
        
    //     return(
    //         <div className="hold" key={selectWordArray.length}>
    //                 {word}
    //         </div>
    //     );
    // });
    
    
    return (
        <div className="wordHold">
            {/* {selected} */}
            {
                selectWordArray.map((word)=>
        
                    (
                        <div className="hold" key={selectWordArray.length}>
                                {word}
                        </div>
                    )
                )
            }
        </div>
    )


  
}  

export default Word;