import React from 'react';
import Letters from '../letters/letters.js'
import './game.css';
import Handman from '../handman/handman.js';
import Word from '../word/word.js';





const Game = (props) =>{


        return(
            <div className="paper" id="instructions">
                <div className="basicInfo">
                    {/* div className="wins">Wins: <strong> {props.wins}</strong></div> */}
                    <div className="score">Scrore: <strong>{props.score}</strong></div>
                    <div className="category">Category: <strong>{props.category}</strong></div>
                </div>
                <div className="gameContainer">
                
                <div className="gallows">
                    <Handman/>
                </div>
                <div className="words" id="words">
                  <Word
                   category={props.category}
                   words={props.word}
                  />
                </div>
                <div className="Letters">
                <Letters
                onClickLetter={props.onClickLetter}
                onPressLetter ={props.onPressLetter}
               // onCheckLetter={props.onCheckLetter}
               />
              { props.nextWord === 1 && <button onClick={props.checkNextWord}>Go to Next Level</button>} 

                </div>
                </div>
            </div>
        )
    }



export default Game;