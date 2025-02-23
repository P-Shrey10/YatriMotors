"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store/favoriteSlice";
import articlesData from "../../data/blog-posts.json";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SearchBar from "../../components/layout/SearchBar";
import Button from "../../components/ui/Button";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  const articlesPerPage = 5;
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    setIsClient(true);
    const fetchArticles = async () => {
      try {
        setTimeout(() => {
          setArticles(articlesData);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleCardClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleFavorite = (e, article) => {
    e.stopPropagation();
    const isFavorite = favorites.some((fav) => fav.id === article.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(article));
    } else {
      dispatch(addToFavorites(article));
    }
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="h-48 w-full md:w-48 bg-gray-200"></div>
        </div>
        <div className="p-6 w-full">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-4"></div>
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-[#2CD6C9] mb-8 text-center">
          Motorcycle Blogs
        </h1>

        <div className="flex justify-between items-center mb-4">
          {!loading && (
            <>
              <Button label="Add Blog" route="/blogs/add" />
              <SearchBar onSearch={handleSearch} />
            </>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {loading
            ? Array(articlesPerPage)
                .fill()
                .map((_, index) => <SkeletonCard key={index} />)
            : currentArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-[1.01] cursor-pointer"
                  onClick={() => handleCardClick(article.slug)}
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <div className="h-48 w-full md:w-48 bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-12 h-12 text-[#10424a]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v14h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-[#10424a] mb-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{article.summary}</p>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-gray-500">
                          {formatDate(article.date)}
                        </p>
                        <span className="px-4 py-2 bg-[#10424a] text-white rounded-lg text-sm font-semibold">
                          Read More
                        </span>
                        <button
                          onClick={(e) => handleFavorite(e, article)}
                          className="ml-auto p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${
                              favorites.some((fav) => fav.id === article.id)
                                ? "fill-red-500 stroke-red-500"
                                : "fill-none stroke-gray-400"
                            }`}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {!loading && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                &larr;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === number
                        ? "bg-[#2CD6C9] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                &rarr;
              </button>
            </nav>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
