"use client";

import React, { useState, useEffect } from "react";
import articlesData from "../../../data/blog-posts.json";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Button from "../../../components/ui/Button";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 5;
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const viewArticle = (id) => {
    console.log(`Viewing article: ${id}`);
  };

  const editArticle = (id) => {
    console.log(`Editing article: ${id}`);
  };

  const deleteArticle = (id) => {
    console.log(`Deleting article: ${id}`);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const selectedArticles = articlesData.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const Skeleton = () => (
    <tr className="border hover:bg-gray-100 text-[#2CD6C9]">
      <td className="p-3 border">
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </td>
      <td className="p-3 border">
        <div className="h-4 bg-gray-200 rounded w-48"></div>
      </td>
      <td className="p-3 border">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </td>
      <td className="p-3 border flex gap-2">
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
      </td>
    </tr>
  );

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl text-[#2CD6C9] font-bold">Blog Articles</h2>
          <Button label="Add Blog" route="/blogs/add" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-white shadow-md rounded-lg">
            <thead>
              <tr className="text-[#2CD6C9] text-left">
                <th className="p-3 border">SN</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? Array.from({ length: articlesPerPage }).map((_, index) => (
                    <Skeleton key={index} />
                  ))
                : selectedArticles.map((article, index) => (
                    <tr
                      key={article.id}
                      className="border hover:bg-gray-100 text-[#2CD6C9]"
                    >
                      <td className="p-3 border">{startIndex + index + 1}</td>
                      <td className="p-3 border">{article.title}</td>
                      <td className="p-3 border">{article.date}</td>
                      <td className="p-3 border flex gap-2">
                        <button
                          onClick={() => viewArticle(article.id)}
                          className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                          View
                        </button>
                        <button
                          onClick={() => editArticle(article.id)}
                          className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteArticle(article.id)}
                          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          {!loading && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={handlePreviousPage}
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
                  onClick={handleNextPage}
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
      </div>
      <Footer />
    </>
  );
};

export default Page;
