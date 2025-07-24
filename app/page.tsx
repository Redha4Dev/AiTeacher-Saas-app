import React from 'react'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/NavBar'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import { recentSessions } from '@/constants'
import { cn } from '@/lib/utils'
import CTA from '@/components/CTA'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl ">Popular companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color='#FFFFFF'
        />
        <CompanionCard 
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color='#FFFFFF'
        />
        <CompanionCard 
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          duration={45}
          subject="science"
          color='#FFFFFF'
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 lg:max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page