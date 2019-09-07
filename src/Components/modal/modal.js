import React from 'react';
import './modal.css'; 

const Modal = (props)=>{
    
    
        return (
       
            <div className='niki'className={props.showModal ? "modal display-block" : "modal display-none"}>
              <section className="modal-main">
                {props.content}
                <button /*onClick={handleClose}*/>close</button>
              </section>
            </div>
          );
    }
 

export default Modal;