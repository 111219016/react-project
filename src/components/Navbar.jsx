import { NavLink } from 'react-router';

export default function Navbar() {

  const navBarContent = [
    { to: "/", label: "Gallery" },
    { to: "/shop", label: "Shop" },
  ];  

  return (
    <div className="flex flex-wrap justify-center">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `leading-[2] text-[3.3rem] mx-6 text-black text-base transition-all duration-500 ease-in-out ${
              isActive ? "opacity-100 font-normal underline" : "opacity-60"
            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}