"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send a POST request to your API
        console.log({ title, content }); // For demonstration
        router.push('/'); // Redirect after creating the post
    };

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '150px' }}></textarea>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}