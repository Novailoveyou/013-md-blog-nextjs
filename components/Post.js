import Link from 'next/link'
import Image from 'next/image'

const Post = ({
  post: {
    slug,
    frontmatter: { title, date, excerpt, coverImage }
  }
}) => {
  return (
    <div className='card'>
      <Image src={`${coverImage}`} alt={title} width={330} height={220} />

      <div className='post-date'>Posted on {date}</div>

      <h3>{title}</h3>

      <p>{excerpt}</p>

      <Link href={`/blog/${slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}

export default Post
