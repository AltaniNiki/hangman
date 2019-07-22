import React from 'react';
import Letters from '../letters/letters.js'
import './game.css';
import Handman from '../handman/handman.js';
const footballTeams=['AEK','OSFP','PAO','PAOK'];



class Game extends React.Component{
    // constructor(props) {
    //     super(props);
          
    //     this.state={
    //         wins:0,
    //         category:''
    //     };
         
    // };
     

  word =()=>{
        if (this.props.category === 'footballTeams'){
            var selectedWord = footballTeams[Math.floor(Math.random() * footballTeams.length)];
            console.log(selectedWord.length);
            let letter = document.getElementsByClassName('words');
            for (var i=0;i<selectedWord.length;i++){
               
                letter.innerHTML += '_' ;
            }
            
        }
    }  

    render(){
        return(
            <div className="paper" id="instructions">
                {/* <div className="wins">Wins: <strong> {this.state.wins}</strong></div> */}
                <div className="gameContainer">
                
                <div className="gallows">
                    <Handman/>
                </div>
                <div className="words" id="words">
                  {this.word()}
                </div>
                <div className="Letters">
                <Letters/>
                </div>
                </div>
            </div>
        )
    }
}

export default Game;