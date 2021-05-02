import { Component } from 'react';
import Button from './button.js';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = { amount: 20.11 };
  };
  
  render(){
    return(
      <div className="bg-gray-100 border-2 rounded-bl-lg rounded-br-lg border-gray-200 p-5">
        <div className="font-bold text-2xl">
          <span className="px-3 py-1">${ this.state.amount }</span>
          <Button />
        </div>
      </div>
    );
  }
};

export default Header;