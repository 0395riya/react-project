import React, { Component } from 'react'

export default class stck extends Component {
    constructor(){  
        this.data = [];  
        this.top = 0;  
    }  
    stackpush(element) {  
        this.data[this.top] = element;  
        this.top = this.top + 1;  
      } 
      
      stacklength() {  
        return this.top;  
     }  
     peek() {  
        return this.data[this.top-1];  
     }  
     isEmpty() {  
       return this.top == 0;  
     }  
    stackpop() {  
      if( this.isEmpty() == false ) {  
         this.top = this.top -1;  
         return this.data.pop(); // last element gets deleted  
       }  
     }  
     print() {  
        var t = this.top - 1;   
        while(t >= 0) {   
            console.log(this.data[this.top]);  
             t--;  
         }  
      }  
      reverse() {  
         this.rev (this.top - 1 );  
      }  
      rev(index) {  
         if(index != 0) {  
            this.rev(index-1);  
         }  
         console.log(this.data[index]);  
      }  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
