import Link from "next/link";

export default function Nav() {
  return (
    <nav className="px-3 bg-black text-white sticky">
      <div className='flex justify-between items-center max-w-7xl m-auto'>
        <Link href="/" className="p-3 text-xl font-semibold w-1/4 cursor-pointer"><h1>Belleza Express</h1></Link>
        <section className="flex justify-evenly grow text-sm">
          <Link href="/" className='p-2'>HOME</Link>
          <Link href="/#about" className='p-2'>ABOUT</Link>
          <Link href="/#services" className='p-2'>SERVICES</Link>
          <Link href="/#staff" className='p-2'>OURSTAFF</Link>
        </section>
        <Link href="/turn" className='w-1/4 px-5 text-center font-semibold'>AGENDA TU TURNO</Link>
      </div>
    </nav>
  );
}