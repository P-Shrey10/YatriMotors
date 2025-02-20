"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const Button = ({ label, route }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(route)}
      className="bg-teal-500 text-white font-semibold mb-6 px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition duration-200"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Button;
