import { type NextPage } from "next";
import Head from "next/head";
import PageLayout from "~/components/Layout";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Single Post Page</title>
      </Head>
      <PageLayout>
        <div>Post View</div>
      </PageLayout>
    </>
  );
};

export default SinglePostPage;
