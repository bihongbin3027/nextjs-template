import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <div className="flex-shrink-0">
              <Link href="/posts/first-post">
                <a>this page!</a>
              </Link>
            </div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </main>

      <footer>footer</footer>
    </div>
  );
}
