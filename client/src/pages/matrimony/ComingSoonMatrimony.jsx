import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoonMatrimony() {
  return (
    <div className="bg-pink-500 min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-black text-2xl font-semibold">
        We are under Maintenance. will be back soon
      </h1>
      <p className="text-black text-lg">Sorry for the inconvenience</p>
      <Link
        to={"/"}
        className="px-4 py-3 bg-black text-white rounded-lg hover:bg-pink-600 hover:scale-105"
      >
        Back Home
      </Link>
    </div>
  );
}
