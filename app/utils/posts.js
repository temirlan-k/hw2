// utils/posts.js

import postsData from "../data.json";

// Функция для получения всех постов
export function getAllPosts() {
    return postsData;
}

// Функция для получения поста по его "slug"
export function getPostBySlug(slug) {
    return postsData.find(post => post.slug === slug);
}
