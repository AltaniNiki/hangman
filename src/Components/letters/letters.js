import React from 'react';
import './letters.css';

const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];



const Letters = (props)=>{
    const letterDiv =   letters.map((letter)=>{
       
          return (<button className="letter" key={letter} value={letter} onClick={props.onClickLetter} onKeyPres={props.onPressLetter} id={letter}> {/*props.onCheckLetter();*/}
                    {letter}
                  </button>)
      });
    
        return(
            <div className="lettersContainer">
                <div className="lettersDiv">
                    {letterDiv}
                </div>
            </div>
        )
    
}
export default Letters;