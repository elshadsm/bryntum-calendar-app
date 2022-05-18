import React, { useRef } from 'react';

import { BryntumCalendar } from '@bryntum/calendar-react';
import { calendarConfig } from './AppConfig';

import './App.scss';

const App = () => {
  const calendarRef = useRef(null);

  const highlightChangeHandler = ({ value }) => {
    value = value.toLowerCase();
    const { instance } = calendarRef.current;
    const { eventStore } = instance;
    eventStore.suspendEvents();
    eventStore.forEach(task => {
      if (value !== '' && task.name.toLowerCase().includes(value)) {
        task.cls.add('b-match');
      } else {
        task.cls.remove('b-match');
      }
    });
    eventStore.resumeEvents();
    eventStore.trigger('change');
    instance.element.classList[value.length > 0 ? 'add' : 'remove']('b-highlighting');
  };

  return (
    <BryntumCalendar
      ref={calendarRef}
      {...calendarConfig}
      tbar={{
        items: {
          highlight: {
            type: 'textfield',
            weight: 660,
            // positioned: true,
            // centered: true,
            placeholder: 'Highlight tasks',
            clearable: true,
            keyStrokeChangeDelay: 100,
            triggers: {
              filter: {
                align: 'start',
                cls: 'b-fa b-fa-search'
              }
            },
            onChange: highlightChangeHandler
          }
        }
      }}
    />
  );
};

export default App;
