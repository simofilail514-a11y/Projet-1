import Head from 'next/head'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Home() {
  const { data: events, error } = useSWR('/api/events', fetcher, { refreshInterval: 5000 })

  return (
    <Layout>
      <Head>
        <title>Live Sports TV - MVP</title>
      </Head>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Upcoming & Live Matches</h1>
        <div className="grid gap-4">
          {!events && <div>Loading events...</div>}
          {error && <div className="text-red-600">Failed to load events</div>}
          {events?.map((ev: any) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </main>
    </Layout>
  )
}