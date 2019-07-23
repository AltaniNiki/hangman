import React from 'react';
import Letters from '../letters/letters.js'
import './game.css';
import Handman from '../handman/handman.js';
import Word from '../word/word.js';





const Game = (props) =>{


        return(
            <div className="paper" id="instructions">
                <div className="wins">Wins: <strong> {props.wins}</strong></div>
                <div className="gameContainer">
                
                <div className="gallows">
                    <Handman/>
                </div>
                <div className="words" id="words">
                  <Word
                   category={props.category}
                  />
                </div>
                <div className="Letters">
                <Letters/>
                </div>
                </div>
            </div>
        )
    }



export default Game;