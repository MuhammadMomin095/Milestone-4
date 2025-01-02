import { notFound } from 'next/navigation';
import { Post } from '@/app/lib/types';

async function getPost(id: string): Promise<Post | undefined> {
    const posts: Post[] = [
        { id: 1, title: 'First Post', content: 'This is the content of the first post. This is a longer content example for demonstration purposes.' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    ];
    return posts.find((p) => p.id === Number(id));
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}