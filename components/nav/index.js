import Link from 'next/link'
import Tags from './tags'


export default function Nav() {
  return (
    <div>
        {
          Tags.map( tag => (
            <Link href={`/posts/tag/${tag.path}`} key={tag.path }>
              <a>{tag.name}</a>
            </Link>
          ))
        }
    </div>
  )
}


