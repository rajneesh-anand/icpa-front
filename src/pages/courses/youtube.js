import React from "react";

import YoutubeList from "@/components/Course/youtube-list";

import Partner from "@/components/Partner";
import Seo from "@/components/Seo";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Layout from "@/layout/index";

const YoutubeListPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Youtube Course | ICPA Global Consultants"
        description="Our Free Youtube Course | ICPA Global Consultant is one stop solution for setting up an online store on various platforms i.e ( Amazon , Flipkart , Meesho , Shopsy ). We have years of expertise in online seller consultancy"
        canonical={`${process.env.PUBLIC_URL}/courses/youtube`}
      />
      <Header />

      <YoutubeList youtubeVideos={data} />

      <Partner />
      <Footer />
    </Layout>
  );
};

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
export async function getServerSideProps() {
  const url = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=wq0BbhrPgzw&list=UU0fQiGRmQuOjj_o_FoAH05A&key=${process.env.YOUTUBE_API_KEY}`;
  console.log(url);
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=UU0fQiGRmQuOjj_o_FoAH05A&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default YoutubeListPage;
