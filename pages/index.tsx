import Head from 'next/head'
import HomeLayout, { siteTitle } from '../components/HomeLayout';
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { Hero } from '../components/Hero';
import { PostsContainer } from '../components/PostsContainer';
import Header from '../components/Header';

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
    imageUrl: string
  }[]
}) {
  return (
    <HomeLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header postData={allPostsData}/>
      <div className="mt-16">
        <Hero id={allPostsData[Math.floor(Math.random() * allPostsData.length)].id}/>
      </div>
      <PostsContainer postData={allPostsData} />
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}