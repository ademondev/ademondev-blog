import HomeLayout from '../../components/HomeLayout';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Date';
import { Post } from '../../components/Post';
import { PostLayout } from '../../components/PostLayout';
import Header from '../../components/Header';

export default function PostRender({ postData, headerData }) {
    return (
      <PostLayout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Header postData={headerData}/>
        <div className="mt-16">
          <Post postData={postData} />
        </div>
      </PostLayout>
    );
  }

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const allPostsData = getSortedPostsData();

    return {
        props: {
            postData,
            headerData: allPostsData,
        },
    };
}