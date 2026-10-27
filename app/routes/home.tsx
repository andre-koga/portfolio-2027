import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andre Koga's Website" },
    { name: "description", content: "Co-founder & CTO @ Harumi" },
  ];
}

export default function Home() {
  return <Welcome />;
}
