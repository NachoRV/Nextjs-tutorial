import Link from 'next/link'
import Tags from './tags'



export default function Nav() {
  return (
    <div className="nav">
        {
          Tags.map( tag => (
            <Link href={`/posts/tag/${tag.path}`} key={tag.path }>
              <a>{tag.name}</a>
            </Link>
          ))
        }
        <style jsx>{`
          .nav {
            display: flex;
            flex-direction: row-reverse;
            width: 100%;
          }
          .nav > a {
            font-family: monospace;
            margin-left:5px;
            color: var(--black)
          }
          `
        }</style>
    </div>
  )
}


