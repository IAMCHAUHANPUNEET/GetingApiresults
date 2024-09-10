import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const apicall = async () => {
    let response = await fetch("https://dummyjson.com/quotes");
    let data = await response.json();
    setPosts(data.quotes);
    setLoading(false);
    console.log(data.quotes[0].quote);
  };
  useEffect(() => {
    apicall();
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              <p>{post.quote}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostList;
