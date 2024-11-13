import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Book } from 'lucide-react';
import { articles } from '../data/articles';

function ArticleView() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-purple-800">Article not found</h2>
        <Link to="/health-info" className="text-purple-600 hover:text-purple-800 mt-4 inline-block">
          ← Back to Health Info
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link 
        to="/health-info" 
        className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Articles
      </Link>

      <article className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md overflow-hidden">
        {article.imageUrl && (
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-purple-600">{article.readingTime} read</span>
            <span className="text-sm text-purple-600">By {article.author}</span>
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text mb-6 flex items-center">
            <Book size={32} className="mr-3 text-purple-600 flex-shrink-0" />
            {article.title}
          </h1>
          <div className="prose prose-purple max-w-none">
            <div className="text-gray-600 whitespace-pre-line text-lg leading-relaxed">
              {article.content}
            </div>
          </div>
          <div className="mt-8">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-600">
              {article.category}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticleView;