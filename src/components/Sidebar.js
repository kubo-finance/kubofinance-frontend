import React  from 'react'
import {TwitterIcon, FacebookIcon, MediumIcon} from '../icons/socials';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-1/4 font-sans antialiased md:h-screen">
      
      <div className="banner z-50 h-16 w-full bg-gray-500 flex items-center text-center text-white">
        <span className="font-extrabold w-full">KUBO FINANCE</span>
      </div>
    
      <div className="flex flex-col space-between">

        <div className="upper-menu flex flex-col space-y-5 items-center my-5">
          {['Home', 'Reward Pool', 'Staking Pool'].map( e => (
            <button className="px-5 py-3 border-2 border-gray-300 bg-gray-50 rounded-md w-4/6">{e}</button>
          ))}
        </div>
      
        <div className="lower-menu border-gray-500 mt-5">
          <div className="social-deck list-none flex flex-row justify-between w-4/6 mx-auto">
            <li>{TwitterIcon}</li>
            <li>{FacebookIcon}</li>
            <li>{MediumIcon}</li>
          </div>
        </div>

      </div> {/* end of menus */}
    
    </div>
  );
}

export default Sidebar;