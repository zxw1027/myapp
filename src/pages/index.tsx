import { useEffect, useState } from "react";
import { history } from "umi";

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>();
  async function refresh() {
    try {
      const res = await fetch("/api/posts");
      if (res.status !== 200) {
        console.error(await res.text());
      }
      setPosts(await res.json());
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div>
      {!posts && <p>Loading...</p>}
      {posts && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div onClick={() => history.push(`/posts/${post.id}`)}>
                <p>{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
