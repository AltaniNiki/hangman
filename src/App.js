import React from 'react';
import Menu from './Components/menu/menu.js';
import './App.css';
import Game from './Components/game/game.js';
import Modal from './Components/modal/modal';


var footballTeams=['aek','osfp'/*,'pao','paok','ajax','woord'*/];
var programming=['C++','JAVA','JAVASCRIPT','CSS','HTML','RUBY'];
var videoGames=['PRO','FIFA'];

class App extends React.Component {
    
  constructor(props) {
      super(props);
        
      this.state={
          wins:0,
          category:'',
          page:'menu',
          word:[],
          letter:'',
          errors:0,
          score:0,
          nextWord:0,
          showModal:false
      };

    }
//allagh selidas
   onChangePage = (page) =>{
      this.setState({page:page})
      
    }
// allagh katigorias    
    onClickCategory = (e)=>{
     this.setState({category:e.target.value});
   }
// kata thn epilogh to grammatos
   onClickLetter = (e) =>{
  
    this.setState({letter:e.target.value});
    this.onCheckLetter(e.target.value);
   }
// resetPaixnidiou
   resetStage= ()=>{
     this.setState({wins:0,category:'',page:'menu',word:[],letter:'',errors:0,score:0,newWord:0,showModal:false});
   }
   //draw body
   onErrorAddBody=(error_no)=>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    if(error_no === 1 ){
           //header
        ctx.beginPath();
        ctx.arc(90, 23, 20, 0, Math.PI * 2, true); 
        ctx.stroke();
          //smile
        ctx.beginPath();
        ctx.arc(90, 27, 7, 0, Math.PI, false); // draw semicircle for smiling
        ctx.stroke();
          //eyes 
        ctx.beginPath();
        ctx.arc(84, 15, 2, 0, Math.PI * 2, true); // draw left eye
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(98, 15, 2, 0, Math.PI * 2, true); // draw left eye
        ctx.stroke();
    }else if (error_no === 2){
        //body
        ctx.beginPath();
        ctx.moveTo(90, 42);
        ctx.lineTo(90, 100);
        ctx.stroke();
    }else if (error_no === 3){
        //one arm
        ctx.beginPath();
        ctx.moveTo(90, 40);
        ctx.lineTo(70, 80);
        ctx.stroke();
        
    }else if (error_no === 4){
        // two arm
        ctx.moveTo(90, 40);
        ctx.lineTo(120,80 );
        ctx.stroke();

    }else if (error_no === 5){
        // one leg
        ctx.beginPath();
        ctx.moveTo(90, 100);
        ctx.lineTo(150, 130);
        ctx.stroke();
    }else if(error_no === 6){
        // two legs
        ctx.moveTo(90, 100);
        ctx.lineTo(70,150 );
        ctx.stroke();
        
    }

}

//ypologismos le3hs
   onCalculateWord=()=>{
    var selectedWord;
    var flag=0;
        if (this.state.category === 'footballTeams'){
          if (footballTeams.length !==0){
            selectedWord =footballTeams[Math.floor(Math.random() * footballTeams.length)];
            footballTeams = footballTeams.filter((value)=> value !==selectedWord );
          }else{
            flag=1;
            alert('You won score ' +this.state.score);
            this.resetStage();
          }

        }else if(this.state.category==='programming'){
          if (programming.length !== 0){
            selectedWord = programming[Math.floor(Math.random() * programming.length)];
            programming = programming.filter((value)=> value !==selectedWord );
          
          }else{
            flag=1;
            alert('You won score ' +this.state.score);
            this.resetStage();
          }
          
        }else if(this.state.category==='videogames'){
          if (videoGames.length!== 0){
            selectedWord= videoGames[Math.floor(Math.random() * videoGames.length)];
            videoGames = videoGames.filter((value)=> value !== selectedWord );
          }else{
            flag=1;
            alert('You won score ' +this.state.score);
            this.resetStage();
          }
          
        }
       if (flag == 0){
          const selectedWordSplitted = selectedWord.split('');
          var x = selectedWordSplitted.map((word)=>{
      
          return{
            value:word,
            active:false
             }
          });
        this.setState({word:x});
       }
     
   }


   onCheckLetter=(letter)=>{
 // new word
    let newWord = this.state.word.map(l=> {
     
      if (l.value === letter){
        return {...l,active:true};
      }else if (l.value !== letter){
        return l;
      }
    });

    let wins = this.state.wins + (this.state.word.filter(w => w.value == letter).length > 0 ? 1 : 0); //reduce

    if (wins != this.state.wins){
      document.getElementById(letter).disabled = true;
      document.getElementById(letter).className += ' activeBtn';
    }

    let errors = this.state.errors + (this.state.word.filter(w=> w.value === letter).length === 0 ? 1 :0);
    let score = this.state.score + (this.state.word.filter(w=> w.value === letter).length > 0 ? 10 : 0 );
   
    if (errors !== this.state.errors){
      //draw 
      this.onErrorAddBody(errors);
       document.getElementById(letter).disabled = true;
       document.getElementById(letter).className += ' inactiveBtn';
    }

    if(errors == 6){
      //disable all button
      var lettersDiv = document.getElementsByClassName('letter');
       for (let i =0; i<lettersDiv.length; i++){
        document.getElementById(lettersDiv[i].id).disabled = true;
       }
       //show modal
    }

    this.setState({...this.state,word:newWord,wins, errors,score});

    if (newWord.filter(w=> w.active ).length === newWord.length ){
      // prepei na tou di3w mnm oti kerdise
      this.setState({nextWord:1})
    }

   }


   checkNextWord=()=>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    this.onCalculateWord();
    this.setState({nextWord:0,wins:0,errors:0})
    var lettersDiv = document.getElementsByClassName('letter');
    for (let i =0; i<lettersDiv.length; i++){
     document.getElementById(lettersDiv[i].id).disabled = false;
     document.getElementById(lettersDiv[i].id).className = 'letter';
    }
    ctx.clearRect(40, 2, c.width, c.height);
    
   }


 funShowModal = () => {
    console.log('open funShowModal');
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };


      render(){
       
        return (
          <div className="App">
            {this.state.page==='menu' && 
            <Menu
              onClickCategory={this.onClickCategory}
              category={this.state.category}
              onChangePage ={(e)=>this.onChangePage(e)}
              onCalculateWord={this.onCalculateWord}
            />}
 
            {this.state.page==='game' &&
            <Game
             category={this.state.category}
             wins={this.state.wins}
             word={this.state.word}
             onClickLetter={this.onClickLetter}
             score = {this.state.score}
             nextWord = {this.state.nextWord}
             checkNextWord = {this.checkNextWord}
           
            
             />}
           <Modal
            content = 'lalala'
            showModal = {this.state.showModal}
           />
             
          </div>
        );
      }
}

export default App;
