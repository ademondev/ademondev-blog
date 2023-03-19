import HomeLayout from '../../components/HomeLayout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Date';
import { Post } from '../../components/Post';
import { PostLayout } from '../../components/PostLayout';
import Header from '../../components/Header';

export default function PostRender({ postData }) {
    return (
      <PostLayout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <Header postData={postData}/>
        <Post postData={postData} />
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
    return {
        props: {
            postData,
        },
    };
}