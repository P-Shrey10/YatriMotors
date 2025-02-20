"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Button from "../../../components/ui/Button";

const CreateBlog = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    date: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Blog:", form);
    router.push("/blogs");
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-6 m-10 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl text-[#10424A] font-bold">
            Create a New Blog
          </h2>
          <Button label="Blog List" route="/blogs/list" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-[#10424A] font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-[#10424A] font-bold mb-2"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              placeholder="Slug"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="summary"
              className="block text-[#10424A] font-bold mb-2"
            >
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              placeholder="Summary"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-[#10424A] font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-[#10424A] font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2CD6C9]"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition duration-200"
          >
            Publish
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateBlog;
