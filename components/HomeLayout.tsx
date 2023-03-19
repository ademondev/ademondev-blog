import Head from 'next/head';
import { Footer } from './Footer';

export const siteTitle = 'ademondev\'s blog';

export default function HomeLayout({ children }) {
  return (
    <div className=''>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Ademondev's blog website!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}



{/*       {!home && (
        <div className=''>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}