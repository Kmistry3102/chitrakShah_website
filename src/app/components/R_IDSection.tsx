"use client";
import React, { useState } from "react";
import { RID_CARD_CONSTANTS } from "../constants/homePageConstant";
import Image from "next/image";

export default function R_IDSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full flex justify-center items-center pt-24 pb-20 lg:pt-24 lg:pb-24 lg:min-h-screen bg-white">
      <div className="w-full lg:max-w-5xl max-w-full flex justify-center">
        {/* 3D Flip Card Container */}
        <div className="relative w-full max-w-lg h-[600px] lg:h-[600px] perspective-1000">
          <div 
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={handleFlip}
          >
            {/* Front Side - QR Code */}
            <div className="absolute inset-0 w-full h-full backface-hidden bg-black/5 backdrop-blur-md rounded border border-black/20 shadow-2xl flex flex-col lg:items-center items-start justify-center p-8">
              <div className="lg:text-center text-left">
                <div className="text-black text-xl lg:text-4xl font-light tracking-wider m-0 lg:mb-6 mb-4">
                  {RID_CARD_CONSTANTS.TITLE}
                </div>
                
                {/* QR Code */}
                <div className="bg-white border border-black/20 rounded p-2 flex lg:items-center items-start justify-center shadow-lg mb-6">
                    <Image src="/r_id_qr.png" alt="QR Code" width={300} height={300} />
                </div>
                
                <div className="text-lg text-black/40 font-light mb-2">
                  {RID_CARD_CONSTANTS.PORTAL_LABEL}
                </div>
                <div className="text-base text-black/40 font-light">
                  {RID_CARD_CONSTANTS.PORTAL_DESC}
                </div>
              </div>
            </div>

            {/* Back Side - Details */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black/5 backdrop-blur-md rounded border border-black/20 shadow-2xl p-8">
              <div className="text-left mb-6">
                <div className="font-light tracking-wide text-xl lg:text-4xl  text-black mb-2">
                  {RID_CARD_CONSTANTS.TITLE}
                </div>
                <div className="text-xs text-black font-light">
                  Click to return
                </div>
              </div>

              {/* Info grid - 2 columns */}
              <div className="grid  grid-cols-1 lg:grid-cols-1 gap-6">
                {[RID_CARD_CONSTANTS.LEFT, RID_CARD_CONSTANTS.RIGHT].map((col, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    {col.map((row) => {
                      const Icon = row.icon;
                      return (
                        <div key={row.label} className="py-2 border-b-1 border-black/20">
                          {row.icon && (
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="text-sm text-black" />
                              <span className="text-xs text-black font-light">
                                {row.label}
                              </span>
                            </div>
                          )}
                          <div className={`text-sm font-light text-black`}>
                            {row.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
