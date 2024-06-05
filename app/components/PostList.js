// components/PostList.js

import React from "react";
import Link from "next/link";
import { getAllPosts } from "../utils/posts";

const PostList = () => {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8">All Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md">
                        <Link href={`/posts/${post.slug}`}>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.description}</p>
                                    <p className="text-gray-500">Author: {post.author}</p>
                                    <p className="text-gray-500">Date: {post.date}</p>
                                </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
