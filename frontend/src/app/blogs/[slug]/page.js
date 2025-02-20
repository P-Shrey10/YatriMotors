"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import articlesData from "../../../data/blog-posts.json";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const BlogPost = ({ params }) => {
  const [slug, setSlug] = useState(null);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setRelatedPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params;
      setSlug(unwrappedParams.slug);
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setTimeout(() => {
          const foundArticle = articlesData.find((post) => post.slug === slug);
          if (foundArticle) {
            setArticle(foundArticle);

            const related = articlesData
              .filter((post) => post.id !== foundArticle.id)
              .sort(() => 0.5 - Math.random())
              .slice(0, 3);

            setRelatedPosts(related);
          }
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-6 py-44 max-w-6xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2CD6C9] mb-5">Article Not Found</h1>
          <p className="text-xl text-white mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/blogs')}
            className="px-6 py-3 bg-[#10424a] text-white border rounded-lg hover:bg-teal-700 transition"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2CD6C9] mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-white mb-8">
            <span>{formatDate(article.date)}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-16">
          <p className="text-lg text-white mb-6">{article.summary}</p>

          {article.content.split(". ").map((sentence, index) => (
            <p key={index} className="mb-4 text-white leading-relaxed">
              {sentence.trim()}
            </p>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push("/blogs")}
            className="px-6 py-3 bg-[#10424a] text-white border rounded-lg hover:bg-teal-700 transition"
          >
            Back to All Articles
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
