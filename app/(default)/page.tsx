export const metadata = {
  title: 'Herk Technical',
  description: 'Artificial Intelligence, Web Development, Big Data, and more; all in the name of building better businesses.',
}

import Hero from '@/components/hero'
import Calendly from '@/components/inline-widget'

export default function Home() {
  return (
    <>
      <Hero />
      <Calendly />
    </>
  )
}
