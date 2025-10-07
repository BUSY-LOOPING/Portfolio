import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-[2.5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-[clamp(1rem,2vw,1.2rem)] font-[SpeziaMedium] mb-4">
              HOW IT WORKS?
            </h3>
            <a
              href="#process"
              className="inline-block bg-[#fce0ae] text-black py-[8px] px-[16px] rounded-full text-[0.9rem] font-[SpeziaMono] hover:bg-white transition-colors duration-200"
            >
              → MY PROCESS
            </a>
          </div>

          <div>
            <h4 className="text-[0.9rem] font-[SpeziaMono] mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  My Process
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.9rem] font-[SpeziaMono] mb-4 uppercase">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <span className="text-[0.7rem]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors inline-flex items-center gap-1"
                >
                  LinkedIn
                  <span className="text-[0.7rem]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors inline-flex items-center gap-1"
                >
                  Twitter
                  <span className="text-[0.7rem]">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors inline-flex items-center gap-1"
                >
                  Dribbble
                  <span className="text-[0.7rem]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.9rem] font-[SpeziaMono] mb-4 uppercase">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#impressum"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-[0.85rem] hover:text-[#fce0ae] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[0.8rem] font-[SpeziaMono]">
              ©2025 DHRUV YADAV
            </p>
            <a
              href="https://yourwebsite.com"
              className="text-[0.75rem] text-gray-500 hover:text-white transition-colors"
            >
              DESIGN & CODE
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[0.8rem] font-[SpeziaMono]">
              TORONTO, ON
            </p>
            <div className="flex gap-2">
              <span className="text-[#fce0ae]">✦</span>
              <span className="text-[#fce0ae]">✦</span>
              <span className="text-[#fce0ae]">✦</span>
            </div>
          </div>

          <a
            href="#top"
            className="text-[0.8rem] font-[SpeziaMono] hover:text-[#fce0ae] transition-colors flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <span className="text-[1rem]">↑ ↑ ↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
