import React from 'react';

import "./content.css";

import { HeartFilled, CalendarFilled, ProfileOutlined } from '@ant-design/icons';

const ContentCards: React.FC = () => {
  return (
    <div className='container'>
        <div className="cards-container">
      <div className="card">
        <p>Расписать тренировки</p>
        <hr className="cards-line" /> 
        <button className="button"><HeartFilled/> Тренировки</button>
      </div>
      <div className="card">
        <p>Назначить календарь</p>
        <hr className="cards-line" /> 
        <button className="button"><CalendarFilled /> Календарь</button>
      </div>
      <div className="card">
        <p>Заполнить профиль</p>
        <hr className="cards-line" /> 
        <button className="button"><ProfileOutlined /> Профиль</button>
      </div>
    </div>
    </div>
    
  );
};

export default ContentCards;