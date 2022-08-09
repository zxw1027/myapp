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
    <div className={'m-5'}>
      {!posts && <p>Loading...</p>}
      {posts && (
        <div className={'grid grid-cols-6 gap-4' }>
          {posts.map((post,index) => (
              <>
                {index%2===0&&  <div key={post.id} className={'col-span-2 col-start-2 h-32 rounded-lg shadow-sm bg-amber-300 hover:bg-amber-100'}>
                  <div onClick={() => history.push(`/posts/${post.id}`)} className={'m-2'}>
                    <p className={'text-lg font-bold'}>{post.title}</p>
                    <p className={'overflow-ellipsis-3'}>{post.content}</p>
                  </div>
                </div>}
                {index%2===1&&  <div key={post.id} className={'col-span-2 col-start-4 h-32 rounded-lg shadow-sm bg-amber-300 hover:bg-amber-100'}>
                  <div onClick={() => history.push(`/posts/${post.id}`)} className={'m-2'}>
                    <p className={'text-lg font-bold'}>{post.title}</p>
                    <p className={'overflow-ellipsis-3'}>{post.content}</p>
                  </div>
                </div>}
              </>
          ))}
        </div>
      )}
    </div>
  );
}
