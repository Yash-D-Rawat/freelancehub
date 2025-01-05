import React, { useState } from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import './calendar.css'

// import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createResizePlugin } from '@schedule-x/resize'

function Calendar() {

    // Define dummy events with descriptions
    const events = [
        {
            id: '1',
            title: 'Event 1',
            description: 'This is the first event description.',
            start: '2025-01-03 00:00',
            end: '2025-01-03 02:00',
        },
        {
            id: '2',
            title: 'Event 2',
            description: 'This is the second event description.',
            start: '2025-01-04',
            end: '2025-01-04',
        },
        {
            id: '3',
            title: 'Event 3',
            description: 'This is the third event description.',
            start: '2025-01-05',
            end: '2025-01-05',
        },
        {
            id: '4',
            title: 'Event 4',
            description: 'This is the fourth event description.',
            start: '2025-01-06',
            end: '2025-01-06',
        },
        {
            id: '5',
            title: 'Event 5',
            description: 'This is the fifth event description.',
            start: '2025-01-07',
            end: '2025-01-07',
        },
    ]

    const calendar = useCalendarApp({
        views: [
            createViewDay(),
            createViewWeek(),
            createViewMonthGrid(),
            createViewMonthAgenda(),
        ],
        events: events,
        plugins: [ createDragAndDropPlugin(), createEventModalPlugin(), createResizePlugin()], // Use both event service and drag-and-drop plugins
    })

    return (
        <div className='h-screen'>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    )
}

export default Calendar
