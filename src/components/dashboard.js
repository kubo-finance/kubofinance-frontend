import { Component } from "react";

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = { items: [] };
  }

  render(){
    return(
      <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-8 text-2xl mt-20 font-light">
        
        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
        </div>

        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>

        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>

        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>

        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>

        <div className="bg-gray-100 border-2 rounded-lg border-gray-200 p-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>

      </div>
    );
  }
}

export default Dashboard;