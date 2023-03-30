import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import PageLayout from "~/components/Layout";
import { generateSSGHepler } from "~/server/helpers/ssgHelper";
import PostView from "~/components/PostView";

const SinglePostPage: NextPage<{ id: string }> = ({ id }) => {
  const { data, isError } = api.posts.getById.useQuery({
    id,
  });

  if (isError) return <div>Something went wrong...</div>;
  if (!data) return <div>There has not any data</div>;

  return (
    <>
      <Head>
        <title>
          {data.post.content} - @{data.author.username}
        </title>
      </Head>
      <PageLayout>
        <PostView {...data} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHepler();
  const id = context.params?.id;

  if (typeof id !== "string") throw new Error("No id");

  await ssg.posts.getById.prefetch({ id });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default SinglePostPage;
