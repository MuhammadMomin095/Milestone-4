"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Post } from '@/app/lib/types';

async function getPost(id: string): Promise<Post | undefined> {
    const posts: Post[] = [
        { id: 1, title: 'First Post', content: 'This is the content of the first post. This is a longer content example for demonstration purposes.' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    ];
    return posts.find((p) => p.id === Number(id));
}

export default function EditPost({ params }: { params: { id: string } }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();
    const [post, setPost] = useState<Post>();
    const postId = params.id;

    useEffect(() => {
        const fetchPost = async () => {
            const fetchedPost = await getPost(postId);
            if(fetchedPost){
                setPost(fetchedPost);
                setTitle(fetchedPost.title);
                setContent(fetchedPost.content);
            }
        }
        fetchPost();
    }, [postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Send a PUT or PATCH request to your API to update the post
        console.log({ title, content, postId });
        router.push('/');
    };

    if(!post){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '150px' }}></textarea>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
}