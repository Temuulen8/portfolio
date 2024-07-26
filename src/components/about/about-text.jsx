import { GoDotFill } from "react-icons/go";

const About_text = () => {
  return (
    <div className="w-[584px] flex flex-col gap-y-8">
      <h1 className="font-semibold text-3xl">
        Curious about me? Here you have it:
      </h1>
      <div className="text-gray-600 flex flex-col gap-y-8">
        <p className="font-normal text-base">
          I'm a designer turned full stack developer, passionate about React.js
          and Node.js. I excel in blending technical and visual aspects to craft
          exceptional digital products, prioritizing user experience, precise
          design, and optimized code.
        </p>
        <p>
          Since starting my web development journey in 2015, I've embraced
          challenges and kept up with the latest tech trends. Now in my early
          thirties, seven years in, I'm building cutting-edge web apps using
          Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
        </p>
        <p>
          With a progressive mindset, I enjoy the entire product development
          process, from ideation to execution. Off duty, you'll find me on
          Twitter, tracking startup journeys, or unwinding. Follow me for tech
          insights and public project updates on Twitter or GitHub.
        </p>
        <p>Finally, some quick bits about me.</p>
        <div>
          <div className="flex items-center">
            <GoDotFill />
            <div>B.E. in Computer Engineering</div>
          </div>
          <div className="flex items-center">
            <GoDotFill />
            <div>Avid learner</div>
          </div>
          <div className="flex items-center">
            <GoDotFill />
            <div>Full time freelancer</div>
          </div>
        </div>
        <p>
          One last thing, I'm available for freelance work, so feel free to
          reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </div>
  );
};

export default About_text;