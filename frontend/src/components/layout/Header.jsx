import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/images/logo.png";

const Header = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <header className="bg-[#10424a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-16 w-48">
              <Image
                src={image}
                alt="Blog Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <Link
            href="/favoriteBlogs"
            className="flex items-center space-x-2 text-teal-500 hover:text-teal-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="font-medium">Favorites ({favorites.length})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
