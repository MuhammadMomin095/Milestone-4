import PostCard from './components/PostCard';
import { Post } from './lib/types';

async function getPosts(): Promise<Post[]> {
  // Replace with actual data fetching (from DB or API)
  return [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog Posts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}