import React from 'react';
import './menu.css';
import Handman from '../handman/handman.js';

class Menu extends React.Component{
    render(){
        return(
            <div className=" paper" id="instructions">
                <div className="menuContaint">
                    <div className="headers">
                        <h3>Hangman Game</h3>
                    </div>
                    <div>
                        <Handman
                           flag='0' 
                        />
                    </div>
                    <div className="categories">
                        <p>Choice a category to play:</p>         
                            
                        <button id="footballTeams" className={"btn_choice" + (this.props.category === 'footballTeams'? " selectedCategory":"")} value="footballTeams" onClick={this.props.onClickCategory}> Football Teams</button>
                        <button id="programming" className={"btn_choice" + (this.props.category === 'programming'? " selectedCategory":"")} value="programming" onClick={this.props.onClickCategory}>Programming Languages</button>
                        <button id="videogames" className={"btn_choice" + (this.props.category === 'videogames'? " selectedCategory":"")} value="videogames" onClick={this.props.onClickCategory}>Video Games</button>
                    </div>
                <div className="actions">
                    <button className="startGame" onClick={()=>{this.props.onChangePage('game'); this.props.onCalculateWord()}}> Start Game</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Menu;