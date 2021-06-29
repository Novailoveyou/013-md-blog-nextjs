import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link href='/'>
          <a>
            <h2>Dev Blog</h2>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
