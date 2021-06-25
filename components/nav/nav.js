import Link from "next/link";
import Tags from "./tags";

export default function Nav() {
  return (
    <div className="nav">
      {Tags.map((tag) => (
        <Link href={`/posts/tag/${tag.path}`} key={tag.path}>
          <a>{tag.name}</a>
        </Link>
      ))}
      <style jsx>{`
        .nav {
          display: flex;
          flex-direction: row-reverse;
          width: 100%;
          position: absolute;
          top: 90px;
          right: 10px;
        }
        .nav > a {
          font-family: monospace;
          margin-left: 10px;
          color: var(--black);
        }
        .nav > a:hover {
          border-bottom: 2px solid var(--black);
        }
      `}</style>
    </div>
  );
}
