'use client'
import React, { useEffect, useState } from 'react'

export default function VisionStatement() {
  const fullText = `"Real estate doesn't need more listings — it needs a system. I'm\nbuilding it: identity-first, territory-aligned, and trust-led."`;
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let i = 0;
    const type = () => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        setTimeout(type, 32);
      }
    };
    type();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full flex flex-col lg:items-center items-start justify-center lg:pb-24 lg:pt-24 pb-16 pt-16 bg-gray-50">
      <div className='w-full lg:max-w-6xl max-w-full px-8 lg:px-6'>
      <h2 className="text-black text-3xl lg:text-4xl font-light tracking-wider m-0 text-left mb-4 lg:mb-8">Vision Statement</h2>
      <p className="text-black font-light text-lg lg:text-xl tracking-wide text-left">
        {typedText}
        <span className="inline-block w-2 h-6 align-middle bg-black animate-pulse ml-1" style={{verticalAlign: 'middle'}}></span>
      </p>
      </div>
    </section>
  )
}
// pt-24 pb-24 lg:pt-32 lg:pb-32
