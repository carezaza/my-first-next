import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title} | Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
