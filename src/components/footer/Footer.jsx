import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mega Project. All rights reserved.
        </p>
        <p className="text-xs mt-2">Built with ❤️ using React and Appwrite</p>
      </div>
    </footer>
  );
}
export default Footer;
