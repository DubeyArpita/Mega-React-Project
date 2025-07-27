import React from "react";
import appwriteService from "../appwrite/appwrite_config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <div className="mb-4 w-full justify-center">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full rounded-xl object-cover h-40" // Added fixed height and object-cover
          />
        </div>
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default Postcard;
