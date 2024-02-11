import React from 'react';
import "./content.css";

const ContentActions: React.FC = () => {
  return (
    <div className="actions-container">
      <div className="actions">
        <p>С CleverFit ты сможешь:</p>
      <ul>
        <li>планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</li>
        <li>отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</li>
        <li>создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</li>
        <li>выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
      </ul>
      </div>
    </div>
  );
};

export default ContentActions;