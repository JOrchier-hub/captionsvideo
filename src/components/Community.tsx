import React, { useState } from 'react';
import { MessageCircle, User } from 'lucide-react';

const forumPosts = [
  {
    id: 1,
    author: "MenoWarrior",
    title: "Dealing with night sweats",
    content: "I've been experiencing terrible night sweats lately. Any tips on how to manage them?",
    replies: 5,
  },
  {
    id: 2,
    author: "HotFlashQueen",
    title: "Best exercises during menopause",
    content: "I'm looking for gentle exercises that can help with menopause symptoms. Any recommendations?",
    replies: 8,
  },
  {
    id: 3,
    author: "MidlifeMaven",
    title: "Success with herbal remedies",
    content: "I've had great success with black cohosh for hot flashes. Anyone else tried herbal remedies?",
    replies: 12,
  },
];

function Community() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the new post to your backend
    console.log('New post:', newPost);
    // Reset form
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-purple-800">Community Forum</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id="content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors">
            Post
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {forumPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-700 mb-2 flex items-center">
              <MessageCircle size={24} className="mr-2" />
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </span>
              <span>{post.replies} replies</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;