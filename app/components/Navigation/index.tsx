import Link from 'next/link';
export default function Navigation() {
  return <nav>
    <ul>
      <Link href={'/'}>home</Link>
      <Link href={'/blog'}>blog</Link>
      <Link href={'/projects'}>projects</Link>
      <Link href={'/resume'}>resume</Link>
      <Link href={'/contact'}>contact</Link>
    </ul>
  </nav>
}