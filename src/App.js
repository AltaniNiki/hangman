import React from 'react';
import Menu from './Components/menu/menu.js';
import './App.css';
import Game from './Components/game/game.js';

class App extends React.Component {
    
  constructor(props) {
      super(props);
        
      this.state={
          wins:0,
          category:'',
          page:'menu'
      };

    }

   onChangePage = (page) =>{
      this.setState({page:page})
    }
    onClickCategory = (e)=>{
      // if (this.state.category !== ''){
      //    let unselected_btn = document.getElementById(this.state.category);
       
      //    unselected_btn.className = unselected_btn.classList.remove('selectedCategory');
      //    unselected_btn.className +=' btn_choice';
      //    document.getElementById(e.target.value).className +=' selectedCategory';

      // }
      // else {
      //     console.log( document.getElementById(e.target.value).className);
      //     document.getElementById(e.target.value).className +=' selectedCategory';
      // }
     
     this.setState({category:e.target.value});
   }
      render(){
       
        return (
          <div className="App">
            {this.state.page==='menu' && 
            <Menu
              onClickCategory={(e)=>this.onClickCategory(e)}
              category={this.state.category}
              onChangePage ={(e)=>this.onChangePage(e)}
            />}
 
            {this.state.page==='game' &&
            <Game
             category={this.state.category}
             wins={this.state.wins}
             />}
          </div>
        );
      }
}

export default App;
