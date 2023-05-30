import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import Nav from './header/Nav';

export default function Header() {

  return (
    <header className='bg-black text-white bg-cover bg-center' style={{ backgroundImage: 'url(/hero.png)' }}>
      <Nav />
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