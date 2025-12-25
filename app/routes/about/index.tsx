import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Webdeveloper Project | About" },
    { name: "description", content: "About me." },
  ];
}

const AboutPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-2">Hey, I'm Bence 👋</h2>
    </>
  );
};

export default AboutPage;
