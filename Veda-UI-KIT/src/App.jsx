import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
   <div className='min-h-screen flex flex-col items-center justify-center
    bg-white space-y-6 p-8'>
      <h1 className='text-3xl font-bold text-gray-800'>Button Playground</h1>

      <div className='space-x-4'>
         <Button variant="primary" size="sm">Primary sm</Button>
         <Button variant="primary" size="md">Primary md</Button>
         <Button variant="primary" size="lg">Primary lg</Button>
      </div>

      <div className='space-x-4'>
         <Button variant="secondary" size="md">Secondary</Button>
         <Button variant="outline" size="md">Outline</Button>
         <Button variant="ghost" size="md">Ghost</Button>
      </div>

      <div className='space-x-4'>
         <Button variant="primary" disabled>Secondary</Button>
      </div>

      
   </div>
  )
}

export default App

