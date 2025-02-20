const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#10424a] py-6 border-t border-white mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-white">
          &copy; {currentYear} All Rights Reserved
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-white hover:fill-[#2CD6C9]"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.6V12h2.6V9.5c0-2.6 1.6-4 3.8-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-white hover:fill-[#2CD6C9]"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 0 0 1.82-2.31c-.81.48-1.7.83-2.64 1A4.16 4.16 0 0 0 11.1 9c-3.3-.1-6.2-1.8-8.1-4.4a4.14 4.14 0 0 0 1.3 5.5A4.15 4.15 0 0 1 2 9.5v.05a4.16 4.16 0 0 0 3.3 4 4.16 4.16 0 0 1-1.8.07 4.16 4.16 0 0 0 3.9 2.9 8.38 8.38 0 0 1-5.2 1.8A8.28 8.28 0 0 1 2 19.9a11.77 11.77 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.7 0-.2 0-.4-.02-.6A8.4 8.4 0 0 0 22.46 6z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-white hover:fill-[#2CD6C9]"
              viewBox="0 0 24 24"
            >
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 19V10H5v9h3zm-1.5-10.3a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM19 19v-5.2c0-2.3-1.2-3.3-2.8-3.3-1.3 0-2 .7-2.3 1.5V10H11v9h3v-5s0-.1.2-.2c.2-.2.4-.3.7-.3.6 0 1 .4 1 1.3V19h3z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 fill-white hover:fill-[#2CD6C9]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1a6.3 6.3 0 0 1 2.1.4c.6.3 1 .6 1.5 1.1a4.5 4.5 0 0 1 1.1 1.5c.3.7.5 1.5.4 2.1.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9a6.3 6.3 0 0 1-.4 2.1c-.3.6-.6 1-1.1 1.5a4.5 4.5 0 0 1-1.5 1.1c-.7.3-1.5.5-2.1.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1a6.3 6.3 0 0 1-2.1-.4c-.6-.3-1-.6-1.5-1.1a4.5 4.5 0 0 1-1.1-1.5c-.3-.7-.5-1.5-.4-2.1-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9a6.3 6.3 0 0 1 .4-2.1c.3-.6.6-1 1.1-1.5a4.5 4.5 0 0 1 1.5-1.1c.7-.3 1.5-.5 2.1-.4 1.3-.1 1.7-.1 4.9-.1zM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 11.5A4.5 4.5 0 1 1 16.5 12 4.5 4.5 0 0 1 12 16.5zM18.4 5.6a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
            </svg>
          </a>
        </div>

        <div className="flex items-center text-sm text-white">
          <span className="flex items-center gap-1">
            Powered by YatriMotors
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;