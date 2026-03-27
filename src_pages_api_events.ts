import type { NextApiRequest, NextApiResponse } from 'next'

type Event = {
  id: string
  league: string
  home: string
  away: string
  startTime: string
  status: 'upcoming' | 'live' | 'finished'
  score?: { home: number; away: number }
}

const now = new Date()
const in10 = new Date(now.getTime() + 10 * 60000).toISOString()
const in60 = new Date(now.getTime() + 60 * 60000).toISOString()

const events: Event[] = [
  {
    id: 'evt-1',
    league: 'Premier League',
    home: 'Team A',
    away: 'Team B',
    startTime: in10,
    status: 'upcoming'
  },
  {
    id: 'evt-2',
    league: 'La Liga',
    home: 'Team C',
    away: 'Team D',
    startTime: in60,
    status: 'upcoming'
  },
  {
    id: 'evt-3',
    league: 'Friendly',
    home: 'Team E',
    away: 'Team F',
    startTime: now.toISOString(),
    status: 'live',
    score: { home: 1, away: 0 }
  }
]

export default function handler(_req: NextApiRequest, res: NextApiResponse<Event[]>) {
  res.setHeader('Cache-Control', 'no-store')
  res.status(200).json(events)
}