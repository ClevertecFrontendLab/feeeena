import React from 'react';
import "./content.css";
import { HeartFilled, IdcardOutlined, CalendarTwoTone} from '@ant-design/icons';


const ContentCards: React.FC = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className='title'>
          <p className='tren'>Расписать тренировки</p>
        </div>
        <div className='btn'>
            <button className="button"><HeartFilled className='btn-mar'/>Тренировки</button>
        </div>
      </div>

      <div className="card">
        <div className='title'>
          <p>Назначить календарь</p>
        </div>
        <div className='btn'>
            <button className="button"><CalendarTwoTone className='btn-mar'/>Календарь</button>
        </div>
      </div>

      <div className="card card3">
        <div className='title'>
          <p>Заполнить профиль</p>
        </div>
        <div className='btn'>
            <button className="button"><IdcardOutlined className='btn-mar'/>Профиль</button>
        </div>
      </div>
      
     </div>
  );
};

export default ContentCards;