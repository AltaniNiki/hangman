import React from 'react';

class Handman extends React.Component{
   
    componentDidMount() {
     
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
        // Kremala
        ctx.moveTo(0, 0);
        ctx.lineTo(0,900);
        ctx.stroke();
        ctx.moveTo(0,0);
        ctx.lineTo(100,0);
        ctx.stroke();
        if (this.props.flag === '0'){
            this.drowAllBody();
        }
        
    

    }

    onErrorAddBody=(error_no)=>{
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
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

    drowAllBody=()=>{
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");
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
   
       //body
       ctx.beginPath();
       ctx.moveTo(90, 42);
       ctx.lineTo(90, 100);
       ctx.stroke();

       // arms
       ctx.beginPath();
       ctx.moveTo(90, 40);
       ctx.lineTo(70, 80);
       ctx.moveTo(90, 40);
       ctx.lineTo(120,80 );
       ctx.stroke();

       // legs
       ctx.beginPath();
       ctx.moveTo(90, 100);
       ctx.lineTo(150, 130);
       ctx.moveTo(90, 100);
        ctx.lineTo(70,150 );
       ctx.stroke();

    }

    addHead = () => {

    }
    render(){
        return(
            <div className="handmanContainer">
                <canvas id="myCanvas">
                Handman
                </canvas>
                
            </div>
        )
    }
}

export default Handman;