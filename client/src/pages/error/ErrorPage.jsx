import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl lg:text-7xl font-semibold">404</h1>
      <p className="text-white text-2xl font-semibold">
        OOPS..! Page Not Found
      </p>

      <Link
        to={"/"}
        className="px-4 py-3 rounded-lg bg-red-800 text-white hover:bg-red-400 hover:scale-105"
      >
        Back Home
      </Link>
    </div>
  );
}
