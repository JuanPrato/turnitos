import Image from 'next/image';
import Link from 'next/link';
import Button from './button';

export default function Header() {

  return (
    <header className='bg-black text-white bg-cover bg-center' style={{ backgroundImage: 'url(/hero.png)' }}>
      <nav className="grow px-3 bg-black">
        <div className='flex justify-between items-center max-w-7xl m-auto'>
          <h1 className="p-3 text-xl font-semibold w-1/4">Belleza Express</h1>
          <section className="flex justify-evenly grow text-sm">
            <Link href="" className='p-2'>HOME</Link>
            <Link href="" className='p-2'>ABOUT</Link>
            <Link href="" className='p-2'>SERVICES</Link>
            <Link href="" className='p-2'>OURSTAFF</Link>
          </section>
          <Link href="" className='w-1/4 px-5 text-center font-semibold'>TAKE YOUR TURN</Link>
        </div>
      </nav>
      <section className='relative h-[700px] bg-cover bg-center bg-no-repeat flex items-center justify-start p-5 max-w-7xl m-auto' >
        <div>
          <h2 className="text-7xl font-semibold drop-shadow-lg">LA BELLEZA<br /><span>A TU ALCANCE</span></h2>
          <h3 className="text-lg my-5">Descubre tu belleza interior y déjala brillar en nuestras manos expertas.</h3>
          <Button text='NUESTROS SERVICIOS' />
        </div>
      </section>
    </header>
  )

}