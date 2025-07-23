import React, { useState } from 'react';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { mockPosts } from '@/data/mockData';

export const CommunityFeed = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleNewPost = (content: string, tags: string[]) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        avatar: '',
        isDoctor: false
      },
      content,
      timestamp: 'now',
      likes: 0,
      tags,
      comments: []
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="space-y-6">
      <CreatePost onPost={handleNewPost} />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};