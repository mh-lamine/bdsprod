import {Link} from 'react-router-dom'
import { useEffect } from "react";

export default function Navbar() {
  // useEffect(() => {
  //   const header = document.querySelector(".sticky-parallax-header");

  //   header.animate(
  //     {
  //       backgroundPosition: ["50% 0", "50% 100%"],
  //       backgroundColor: ["transparent", "#333ca3"],
  //       height: ["100vh", "10vh"],
  //       fontSize: ["calc(4vw + 1em)", "calc(1vw + 1em)"],
  //     },
  //     {
  //       fill: "both",
  //       timeline: new ScrollTimeline({
  //         source: document.documentElement,
  //       }),
  //       rangeStart: "0",
  //       rangeEnd: "90vh",
  //     }
  //   );
  // }, []);
  return (
    <nav className="sticky-parallax-header shadow-xl z-10">
      <ul className="w-full p-3 flex items-center justify-between">
        <li>
          <Link to="/">
            <img src="../bds.png" alt="logo" className="h-16 invert" />
          </Link>
        </li>
        <li>
          <Link to="/dashboard">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
