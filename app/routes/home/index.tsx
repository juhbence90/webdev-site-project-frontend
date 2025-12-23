import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Webdeveloper Project | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {
  return <section>Homepage</section>;
}
