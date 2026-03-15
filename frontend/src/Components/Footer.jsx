import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Student Portfolio Builder
          </h2>
          <p className="text-sm">
            A platform where interns showcase their projects, skills,
            and achievements professionally for potential employers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 cursor-pointer">Home</li>
            <li className="hover:text-indigo-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-indigo-400 cursor-pointer">Upload Project</li>
            <li className="hover:text-indigo-400 cursor-pointer">Explore Projects</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Connect
          </h3>
          <p className="text-sm">Email: support@portfoliobuilder.com</p>
          <p className="text-sm">Helping interns build professional portfolios.</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Student Portfolio Builder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;