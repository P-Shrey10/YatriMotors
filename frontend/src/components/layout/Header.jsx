import Image from "next/image";
import Link from "next/link";
import image from "../../../public/images/logo.png";

const Header = () => {
  return (
    <header className="bg-[#10424a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex justify-center items-center">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
