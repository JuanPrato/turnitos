import Header from '@/components/header'
import About from './About'
import Services from './Services'
import Staff from './Staff'
import Quotes from './Quotes'
import MakeConsult from './MakeConsult'
import Footer from './Footer'

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
          <MakeConsult />
        </div>
        <Footer />
      </main>
    </>
  )
}
