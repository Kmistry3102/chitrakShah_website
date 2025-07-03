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
    <div className="relative w-full pt-24 pb-20 lg:pt-24 lg:pb-24 bg-white">
      <div className="w-full lg:max-w-6xl max-w-full lg:mx-auto lg:flex lg:justify-center justify-start">
        {/* 3D Flip Card Container */}
        <div
          className={`relative w-full max-w-lg transition-all duration-700 ease-in-out ${
            isFlipped ? "h-[600px]" : "lg:h-[450px] h-[200px]"
          }`}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleFlip}
          >
            {/* Front Side - Compact QR Code */}
            <div className="absolute inset-0 w-full h-full backface-hidden border border-black/20 bg-white flex lg:flex-col-reverse lg:items-center items-center justify-evenly lg:justify-center gap-4 lg:p-6 p-4">
              <div className="lg:text-center text-left">
                <div className="text-3xl lg:text-4xl font-light tracking-wider mb-6">
                  {RID_CARD_CONSTANTS.TITLE}
                </div>

                {/* QR Code */}
                <div className="bg-white mb-6">
                <Image
                  src="/r_id_qr.png"
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="w-34 h-34 lg:w-40 lg:h-40 hidden lg:block"
                />
              </div>

                <div className="text-base lg:text-lg text-black/70 font-light mb-2">
                  {RID_CARD_CONSTANTS.PORTAL_LABEL}
                </div>

                <div className="text-sm lg:text-base text-black/40 font-light">
                  Click to flip for details
                </div>
              </div>
              <div className="bg-white">
                <Image
                  src="/r_id_qr.png"
                  alt="QR Code"
                  width={150}
                  height={150}
                  className="w-34 h-34 lg:w-40 lg:h-40 block lg:hidden"
                />
              </div>
            </div>

            {/* Back Side - Expanded Details */}
            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border border-black/20 bg-white p-6">
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="lg:text-center text-left mb-6">
                  <div className="text-2xl lg:text-4xl font-light tracking-wider mb-2">
                    {RID_CARD_CONSTANTS.TITLE}
                  </div>
                  <div className="text-xs text-black/40 font-light">
                    Click to return
                  </div>
                </div>

                {/* Details Grid */}
                <div className="flex-1 overflow-y-auto">
                  <div className="grid grid-cols-1  gap-4">
                    {[RID_CARD_CONSTANTS.LEFT, RID_CARD_CONSTANTS.RIGHT].map(
                      (col, colIdx) => (
                        <div key={colIdx} className="space-y-3">
                          {col.map((row) => {
                            const Icon = row.icon;
                            return (
                              <div
                                key={row.label}
                                className="bg-white border-b border-black/20 px-0 py-2"
                              >
                                <div className="flex items-center gap-3">
                                  {row.icon && (
                                    <div className="p-2 bg-black/20 flex-shrink-0">
                                      <Icon className="text-black/60 text-lg" />
                                    </div>
                                  )}
                                  <div className="flex-1">
                                    <div className="text-sm text-black/60 font-light mb-1">
                                      {row.label}
                                    </div>
                                    <div className="text-base font-light text-black">
                                      {row.value}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )
                    )}
                  </div>
                </div>
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
