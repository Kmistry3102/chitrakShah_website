import React from 'react';
import { CONNECT_OPTIONS } from '../constants/homePageConstant';

export default function ConnectSection() {
  return (
    <section className="w-full py-8 lg:py-16 flex flex-col items-center bg-white">
      <div className="w-full lg:max-w-6xl max-w-full">
        <h2 className="text-black text-xl lg:text-4xl font-light text-left lg:mb-14 mb-8 tracking-wide">Contribute & Connect</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {CONNECT_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="group flex flex-col items-left text-left gap-2"
              >
                <div className="flex items-center justify-center lg:w-28 lg:h-28 w-18 h-18 rounded-full border-1 border-black/20 bg-black/5 backdrop-blur-xl shadow-md mb-1 transition-all duration-300 group-hover:border-black group-hover:scale-105">
                  <Icon className="lg:text-3xl text-2xl text-black" />
                </div>
                <div className="text-black font-light text-base lg:text-lg tracking-wide">{opt.title}</div>
                <div className="text-gray-700 text-sm lg:text-base font-light">{opt.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
