import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/appwrite_config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  const renderEmptyState = (title, subtitle) => (
    <div className="w-full py-8">
      <Container>
        <div className="mx-auto w-full max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-base text-gray-600">{subtitle}</p>
        </div>
      </Container>
    </div>
  );

  if (loading) {
    return renderEmptyState("Loading posts...", "Please wait a moment.");
  }

  if (!authStatus) {
    return renderEmptyState(
      "Welcome to the Blog!",
      "Please log in to see the latest posts from our community."
    );
  }

  if (posts.length === 0) {
    return renderEmptyState(
      "No Posts Found",
      "It looks empty in here. Why not create the first post?"
    );
  }

  // if (!authStatus) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center">
  //       <Container>
  //         <div className="flex flex-wrap">
  //           <div className="p-2 w-full">
  //             <h1 className="text-2xl font-bold hover:text-gray-500">
  //               Login to read posts
  //             </h1>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // } else if (posts.length === 0) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center">
  //       <Container>
  //         <div className="flex flex-wrap">
  //           <div className="p-2 w-full">
  //             <h1 className="text-2xl font-bold hover:text-gray-500">
  //               No posts available
  //             </h1>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //   );
  // }

  // return (
  //   <div className="w-full py-8">
  //     <Container>
  //       <div className="flex flex-wrap">
  //         {posts.map((post) => (
  //           <div key={post.$id} className="p-2 w-1/4">
  //             <PostCard {...post} />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   </div>
  // );

  return (
    <div className="w-full py-8">
      <Container>
        {/* Switched to a responsive grid layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id}>
              {/* No need for wrapper divs with padding/width here */}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
