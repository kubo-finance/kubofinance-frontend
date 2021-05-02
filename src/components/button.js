import { Component } from 'react'; 

class Button extends Component{
  constructor(props){
    super(props);
    this.state = { text: 'Connect' };
  }

  render(){
    return(
      <button type="button" className="bg-gray-800 text-white px-3 py-0.5 rounded-full font-bold float-right hover:bg-gray-100 hover:text-gray-800">
        {this.state.text}
      </button>
    );
  }
}

export default Button;