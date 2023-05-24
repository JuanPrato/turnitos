import Header from '@/components/header'
import About from './About'
import Services from './Services'
import Staff from './Staff'
import Quotes from './Quotes'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <div className="max-w-7xl m-auto">
          <About />
          <Services />
          <Staff />
          <Quotes />
          <div className='h-[150px]'></div>
        </div>
        {/*
       SECCIONES:
        - RESERVE YOUR VISIT:
          - 
        - CONTACT FOR QUESTIONS:
          - NAME
          - EMAIL
          - QUESTION
          - SEND BUTTON
        - FOOTER:
          - NAVBAR
          - SIGN IN REDIRECT
      */}
      </main>
    </>
  )
}
