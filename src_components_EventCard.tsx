import React from 'react'

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  return (
    <article className="p-4 bg-white rounded shadow-sm flex items-center justify-between">
      <div>
        <div className="text-sm text-slate-500">{event.league}</div>
        <div className="text-lg font-medium">
          {event.home} vs {event.away}
        </div>
        <div className="text-sm text-slate-500">{new Date(event.startTime).toLocaleString()}</div>
      </div>
      <div className="text-right">
        {event.status === 'live' ? (
          <div className="text-red-600 font-semibold">LIVE {event.score ? `— ${event.score.home}:${event.score.away}` : ''}</div>
        ) : (
          <div className="text-sm text-slate-500">{event.status}</div>
        )}
      </div>
    </article>
  )
}

export default EventCard