import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Webdeveloper Project | Contact" },
    { name: "description", content: "Contact Me" },
  ];
}

const ContactPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        📥 Contact Me
      </h2>
    </>
  );
};

export default ContactPage;
