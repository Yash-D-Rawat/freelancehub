import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

// Localizer for Date handling (using moment.js)
const localizer = momentLocalizer(moment);

const CalendarScheduler = () => {
  // Example events with unique IDs
  const [events, setEvents] = useState([
    {
      title: 'Sample Event',
      start: new Date(2025, 0, 3, 10, 0), // January 3, 2025 10:00 AM
      end: new Date(2025, 0, 3, 12, 0), // January 3, 2025 12:00 PM
      id: 1,
    },
    {
      title: 'Meeting',
      start: new Date(2025, 0, 5, 14, 0), // January 5, 2025 2:00 PM
      end: new Date(2025, 0, 5, 15, 0), // January 5, 2025 3:00 PM
      id: 2,
    },
  ]);

  // Handle event click to view or edit details
  const handleEventClick = (event) => {
    alert(`Event: ${event.title}`);
  };

  // Handle event creation by clicking on a time slot
  const handleSelectSlot = (slotInfo) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = {
        title,
        start: slotInfo.start,
        end: slotInfo.end,
        id: events.length + 1, // Create a new unique ID for new events
      };
      setEvents([...events, newEvent]);
    }
  };

  // Handle event resize (for resizing the event in time view)
  const handleEventResize = (data) => {
    const updatedEvents = events.map((event) => {
      if (event.id === data.event.id) {
        event.start = data.start;
        event.end = data.end;
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // Handle event drop (for drag-and-drop functionality)
  const handleEventDrop = ({ event, start, end }) => {
    const updatedEvents = events.map((e) => {
      if (e.id === event.id) {
        return {
          ...e,
          start,
          end,
        };
      }
      return e;
    });
    setEvents(updatedEvents);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleEventClick} // Click to view/edit event
          onSelectSlot={handleSelectSlot} // Click to create event (do not confuse with drag-and-drop)
          onEventResize={handleEventResize} // Handle event resizing
          onEventDrop={handleEventDrop} // Handle event drop (drag-and-drop)
          selectable={true}
          views={['month', 'week', 'day']} // Enable month, week, day views
          defaultView="month" // Default view on load
          popup={true} // Enable popups for event editing
          style={{ height: 600 }} // Set height of calendar
        />
      </div>
    </DndProvider>
  );
};

export default CalendarScheduler;
