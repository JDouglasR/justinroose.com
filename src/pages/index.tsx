import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { Home } from "../page-components/Home/Home"


export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <Home />
    </Layout>
  );
}


// export const getStaticProps: GetStaticProps = async () => {
//     const posts = listPostContent(1, config.posts_per_page);
//     const tags = listTags();
//     const pagination = {
//       current: 1,
//       pages: Math.ceil(countPosts() / config.posts_per_page),
//     };
//     return {
//       props: {
//         posts,
//         tags,
//         pagination,
//       },
//     };
//   };