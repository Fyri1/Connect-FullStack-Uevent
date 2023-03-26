import React from 'react';
import '../../css/EventDetailsHead.css';

const EventDetailsHead = ({ eventData }) => {
  return (
    <div>
      <h1 className="text-name pb-1  dark:text-dark-text-200" >{ eventData.title }</h1>
      <h1 className="text-event-description pb-1 dark:text-dark-text-200">ПРО ПОДIЮ</h1>

      <p className="text-event-description2 pb-1 dark:text-dark-text-200">ZОМУ ВАРТО ПІТИ НА ВИСТАВУ "ЖЕНИХИ"?</p>
      {/* Description */}
        <div className="max-w-full">
          <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
          Ролі виконують: Ольга Скороходова, Максим Дашевський, Володимир Горянський, Іван Момот, Дмитро Патрушев, Олександр Князь.
          Заснована на п'єсі Миколи Васильовича Гоголя постановка «Женихи» є за словами великого автора «абсолютно неймовірною подією». І ви маєте бути її безпосередніми свідками. А це вже обіцяє море усмішок, феєрверк яскравих емоцій і незабутні враження.
          Всі події вистави розгортаються на тлі сватання п'ятьох вельми колоритних женихів до Агафії Петрівни, яка є ні багато ні мало, - купецькою дочкою. Але знатна наречена аж ніяк не проявляє прихильності до женихів: її хвилює один-єдиний, якому Агафія віддасть не тільки серце...
          Героїв вистави оточують знакові сни, мрії і передчуття. Підсвідомість малює химерні картини... А яка ж реальність? І якою буде відповідь «єдиного» на щире жіноче зізнання? Приходьте і дивіться.
          Ролі виконують: Ольга Скороходова, Максим Дашевський, Володимир Горянський, Іван Момот, Дмитро Патрушев, Олександр Князь.
          Заснована на п'єсі Миколи Васильовича Гоголя постановка «Женихи» єза словами великого автор «абсолютно неймовірною подією». І ви маєте бути її безпосередніми свідками. А це вже обіцяє море усмішок, феєрверк яскравих емоцій і незабутні враження.
          Всі події вистави розгортаються на тлі сватання п'ятьох вельми колоритних женихів до Агафії Петрівни, яка є ні багато ні мало, - купецькою дочкою. Але знатна наречена аж ніяк не проявляє прихильності до женихів: її хвилює один-єдиний, якому Агафія віддасть не тільки серце...
          Героїв вистави оточують знакові сни, мрії і передчуття. Підсвідомість малює химерні картини... А яка ж реальність? І якою буде відповідь «єдиного» на щире жіноче зізнання? Приходьте і дивіться.
            
          </p>
          <p>До зустрічі!</p>
        </div>
    </div>
  )
}

export default EventDetailsHead;
