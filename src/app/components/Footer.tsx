import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white px-8 lg:px-6 py-8 text-black relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
        {/* Main content center/left */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full">
          <div className="font-light text-base lg:text-xl mb-2 text-left">
            Built on Real Estate OS — <span className="font-medium">Powered by R Universe</span>
          </div>
          <nav className="flex items-start justify-start gap-6 mb-2 text-sm font-light lg:text-base text-left">
            <div className="hover:underline transition">
              Privacy
            </div>
            <div className="hover:underline transition">
              Terms
            </div>
            <div className="hover:underline transition">
              Contact
            </div>
          </nav>
          {/* <div className="text-xs text-gray-400 mb-2 text-center">© 2024 Chitrak Shah. All rights reserved.</div> */}
        </div>
      </div>
    </footer>
  );
}
