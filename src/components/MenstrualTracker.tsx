import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Droplet } from 'lucide-react';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

interface MenstrualEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
}

function MenstrualTracker() {
  const [events, setEvents] = useState<MenstrualEvent[]>([]);
  const [newEvent, setNewEvent] = useState({
    start: new Date(),
    end: new Date(),
    flow: 'light'
  });

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setNewEvent({ ...newEvent, start, end });
  };

  const handleAddEvent = () => {
    const event: MenstrualEvent = {
      id: events.length + 1,
      title: `Period (${newEvent.flow})`,
      start: newEvent.start,
      end: newEvent.end,
      allDay: true,
    };
    setEvents([...events, event]);
    setNewEvent({ start: new Date(), end: new Date(), flow: 'light' });
  };

  const eventStyleGetter = (event: MenstrualEvent) => {
    let backgroundColor = '#FED7D7'; // light flow
    if (event.title.includes('medium')) {
      backgroundColor = '#FEB2B2'; // medium flow
    } else if (event.title.includes('heavy')) {
      backgroundColor = '#FC8181'; // heavy flow
    }
    return { style: { backgroundColor } };
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-purple-800">Menstrual Tracker</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Add New Period</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="date"
            value={moment(newEvent.start).format('YYYY-MM-DD')}
            onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
            className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />
          <select
            value={newEvent.flow}
            onChange={(e) => setNewEvent({ ...newEvent, flow: e.target.value })}
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="heavy">Heavy</option>
          </select>
          <button
            onClick={handleAddEvent}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={handleSelectSlot}
          selectable
          eventPropGetter={eventStyleGetter}
          components={{
            event: ({ event }) => (
              <div className="flex items-center">
                <Droplet size={16} className="mr-1" />
                <span>{event.title}</span>
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default MenstrualTracker;