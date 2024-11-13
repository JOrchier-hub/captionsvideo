import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Search } from 'lucide-react';
import { articles } from '../data/articles';

function HealthInfo() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(articles.map(article => article.category))];

  const filteredArticles = articles.filter(article => 
    (selectedCategory === 'All' || article.category === selectedCategory) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     article.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Health Information</h1>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border-purple-200 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map(article => (
          <Link
            key={article.id}
            to={`/health-info/article/${article.id}`}
            className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            {article.imageUrl && (
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-600">{article.readingTime} read</span>
                <span className="text-sm text-purple-600">By {article.author}</span>
              </div>
              <h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text mb-2 flex items-center">
                <Book size={24} className="mr-2 text-purple-600 flex-shrink-0" />
                {article.title}
              </h2>
              <div className="text-gray-600 mb-4 line-clamp-3">
                {article.content.split('\n')[0]}
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600">
                {article.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HealthInfo;