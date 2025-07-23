import SkillCard from "./SkillCard";
import SkillCardBack from "./SkillCardBack";

const SkillsSection = () => {
  return (
    <section className="h-[100dvh] lg:px-[4rem] md:px-[3rem] px-[2rem] w-full mt-[10%]">
      <div className="flex flex-row items-center w-full font-[SpeziaMedium]">
        <h3 className="skills-heading">What I Do</h3>
        <p className="skills-heading flex-1 text-center">
          When tech is personal, it's not just code—it’s craftsmanship.
        </p>
      </div>
      <div className="px-[10rem] mt-[5rem] flex flex-nowrap gap-10 justify-between items-center cards-container">
        <SkillCard
          className="max-w-[25rem]"
          delay={0}
          color="#e5daf6"
          coverImg="./icons/kokeshi_cross_dark.svg"
          coverText="FRONT END"
        />
        <SkillCard
          className="max-w-[25rem]"
          delay={0.3}
          color="#ffd2f3"
          coverImg="./icons/kokeshi_cross_dark.svg"
          coverText="BACK END"
        />
        <SkillCard
          className="max-w-[25rem]"
          delay={0.6}
          color="#fcdeac"
          coverImg="./icons/kokeshi_cross_dark.svg"
          coverText="AI/ML"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
