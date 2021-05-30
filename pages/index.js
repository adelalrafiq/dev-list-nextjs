import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>      
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium, ducimus est, vitae similique ipsam odit officia nesciunt modi dolorem distinctio facilis aut minima natus veniam veritatis maiores enim voluptatem?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium, ducimus est, vitae similique ipsam odit officia nesciunt modi dolorem distinctio facilis aut minima natus veniam veritatis maiores enim voluptatem?</p>
      <Link href="/developers">
      <a>See Developers List</a>        
      </Link>      
    </div>
  )
}
