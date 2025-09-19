import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface CustomNavLinkProps {
  to: string;
  label: ReactNode;
  className?: string;
  activeClassName?: string;
  active?: boolean;
}

export function CustomNavLink({
  to,
  label,
  active,
  className = "nav-link",
  activeClassName = "selected",
}: CustomNavLinkProps) {
  const location = useLocation();

  // Custom "active" check
  const isActive = (() => {
    const [path, hash] = to.split("#");
    const locPath = location.pathname;
    const locHash = location.hash.replace(/^#/, "");

    let pathMatch: boolean = path === locPath
    // Path is relative to page
    if (path === "") {
        pathMatch = true;

        if (locHash === "" && active ) {
            return true;
        }
    }

    // console.log(`LOCHASH: ${location.hash}`);
    // console.log(`HASH: ${hash}`);
    // console.log(`LOCPATH: ${location.pathname}`);
    // console.log(`PATH: ${path}`);

    return pathMatch && (!hash || hash === locHash);
  })();

  return (
    <NavHashLink
      to={to}
      className={({ isActive: defaultActive }: { isActive: boolean; isPending: boolean }) =>
        [
          className,
          (isActive) && activeClassName,
        ]
          .filter(Boolean)
          .join(" ")
      }
      smooth
    >
      {label}
    </NavHashLink>
  );
}
