type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="h-[100vh] lg:px-[4rem] md:px-[3rem] px-[2rem] pt-[3rem]">
      <div className="h-[90vh] mt-[3rem] flex flex-col">
        <div className="w-full flex space-between items-center mb-6">
          <div className="flex flex-row gap-[1.5rem]">
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
          </div>
          <div className="flex flex-1 justify-center gap-[15rem]">
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
          </div>
          <div className="flex flex-row gap-[1.5rem]">
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
            <img
              src="/icons/kokeshi_cross_dark.svg"
              alt="kokeshi cross"
              className="w-2.5 h-2.5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[3rem]">
          <h1 className="w-full font-[SpeziaNarrow] font-black tracking-[clamp(-7.7px,-0.5vw,-3.84px)] text-[clamp(4rem,10vw,12rem)] flex flex-col md:flex-row items-start leading-[0.8] md:gap-10 justify-between">
            <span>STILL</span>
            <div className="md:w-fit w-full flex flex-row-reverse md:flex-row justify-between md:justify-start md:gap-3 items-center">
              <img
                src="/gifs/contact.webp"
                alt="Hello GIF"
                className="aspect-square object-contain h-[0.8em]"
              />
              <span>QUESTIONS?</span>
            </div>
          </h1>

          <div className="flex flex-col md:ml-[50%] md:w-[50%] w-full">
            <p className="font-[SpeziaMedium] text-[1.375rem] md:text-[clamp(1.375rem,1.5vw,1.5625rem)] tracking-tighter leading-6 mb-8">
              Are you looking for a project at a one-time price? Do you have
              another request?{" "}
              <span className="text-[#716f6b]">Feel free to get in touch.</span>
            </p>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-[0.75rem]">
                <span className="font-[SpeziaMono] bg-black rounded-sm py-2 px-3 text-white">
                  E-MAIL
                </span>
                <span className="bg-black h-full w-[0.8rem] rounded-sm"></span>
                <span className="hidden font-[SpeziaMono] bg-black rounded-sm py-2 px-3 text-white cursor-pointer">
                  CLICK TO COPY
                </span>
              </div>
              <div className="inline-block">
                <a
                  href="mailto:dhruvyadav2905@gmail.com"
                  className="font-[SpeziaMedium] text-[clamp(2rem,2.4vw,2.625rem)] leading-none block pb-3"
                >
                  dhruvyadav2905@gmail.com
                </a>
                <div className="w-full h-[0.2rem] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
