import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Game Corner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a
        className="pointer-events-none absolute bottom-0 opacity-0"
        href="https://www.freepik.com/vectors/background"
      >
        Background vector created by freepik - www.freepik.com
      </a>
    </div>
  )
}
