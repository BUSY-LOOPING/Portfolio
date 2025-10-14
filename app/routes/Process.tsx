import React from "react";

const Process = () => {
  return (
    <div className="min-h-screen px-[2.5rem] pt-[6rem]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6">Simple Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Websites can be quite complex – but the process to get there and the website itself shouldn't be. 
            Nobody wants to click through endless pages.
          </p>
        </section>

        {/* Process Steps */}
        <div className="space-y-20">
          {/* Step 1: Define */}
          <section>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-bold text-gray-300">01</span>
              <h2 className="text-4xl font-bold">Define</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              We define the foundations of your project.
            </p>
            <ul className="grid grid-cols-2 gap-4 max-w-2xl">
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Workshop</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Define tasks</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Content Mapping</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Moodboard</li>
            </ul>
          </section>

          {/* Step 2: Design */}
          <section>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-bold text-gray-300">02</span>
              <h2 className="text-4xl font-bold">Design</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Based on the foundations, we build the web design for all pages.
            </p>
            <ul className="grid grid-cols-2 gap-4 max-w-2xl">
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Design System</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Animation concepts</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">UX/UI Design</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Behind the Scenes</li>
            </ul>
          </section>

          {/* Step 3: Build */}
          <section>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-bold text-gray-300">03</span>
              <h2 className="text-4xl font-bold">Build</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              The web design is implemented with modern technologies.
            </p>
            <ul className="grid grid-cols-2 gap-4 max-w-2xl">
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Accessible development</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">CMS Integration</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Technical SEO</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Performance Optimization</li>
            </ul>
          </section>

          {/* Step 4: Run */}
          <section className="mb-20">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-bold text-gray-300">04</span>
              <h2 className="text-4xl font-bold">Run</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Your site goes live. You're all set.
            </p>
            <ul className="grid grid-cols-2 gap-4 max-w-2xl">
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Quality assurance</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Handover</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Go-Live</li>
              <li className="bg-[#f0ece5] p-4 rounded-[3px]">Support</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Process;
