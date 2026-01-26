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
            <h1 className="w-full font-[SpeziaNarrow] font-black tracking-[clamp(-2px,-0.45vw,-3.84px)] text-[clamp(4rem,10vw,12rem)] flex flex-col md:flex-row items-start leading-[0.8] md:gap-10">
              <span>STILL</span>
              <div className="flex flex-row-reverse md:flex-row w-full justify-between md:justify-start md:gap-3 items-center">
                <img
                  src="/gifs/contact.webp"
                  alt="Hello GIF"
                  className="aspect-square object-contain h-[0.8em]"
                />
                <span>QUESTIONS?</span>
              </div>
            </h1>
            <p className="font-[SpeziaMedium] text-2xl tracking-tighter w-9/12">
              Are you looking for a project at a one-time price? Do you have another
              request? <span className="text-[#716f6b]">Feel free to get in touch.</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
