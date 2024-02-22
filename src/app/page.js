import Link from "next/link";

export default function Home(params) {
  return (
    <div>
      <h1>hello this is  home  page </h1>
      <Link href="/about" rel="noopener noreferrer">About</Link>
    </div>
  )
}
