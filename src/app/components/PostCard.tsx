import Link from 'next/link';
import { Post } from '../lib/types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius:"8px", boxShadow:"2px 2px 5px rgba(0,0,0,0.2)" }}>
      <Link href={`/posts/${post.id}`}>
        <h3 style={{cursor:"pointer", color:"blue"}}>{post.title}</h3>
      </Link>
      <p>{post.content.slice(0, 100)}...</p>
    </div>
  );
};

export default PostCard;