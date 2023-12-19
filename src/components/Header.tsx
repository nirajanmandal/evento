import Link from "next/link";
import Logo from "./Logo";

const routes = [
  { name: "home", path: "/" },
  { name: "all events", path: "/events/all" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className="capitalize hover:text-white text-white/50 transition"
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
