import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link href="/">Go back home</Link>
      </div>
    </>
  );
}
