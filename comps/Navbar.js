import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (  
    <nav>
      <div className="logo">
        <Image src="/adel.jpg" width={120} height={100}/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/developers"><a>Developers</a></Link>
    </nav>
  );
}
 
export default Navbar;
