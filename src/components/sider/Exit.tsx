import React from 'react';
import "./sider.css";
interface ExitProps {
   style?: string; 
 }

const Exit: React.FC<ExitProps> = ({style}) => {
    
    return (
    <div className="exit-divide">
      <div className="exit ">
      <img src="./public/Exit-icon.png" alt="exit icon" className='exit-icon'/>
      </div>
      </div>
    
    );
  };

  export default Exit;