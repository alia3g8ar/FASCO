"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  onClick = () => {},
}: NavLinkProps) {
  const path = usePathname();
  const isActive = path.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg 
        transition-all duration-300 ease-cubic-bezier
        ${
          isActive
            ? "text-shadow-[0_0_18px_#66bb6a] bg-clip-text bg-gradient-to-r from-[#66bb6a] to-[#66bb6a]"
            : "hover:text-shadow-[0_0_18px_#66bb6a] hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-[#66bb6a]"
        }
        md:hover:bg-gradient-to-r md:hover:from-white md:hover:to-[#66bb6a] md:hover:bg-clip-text
        mobile-styles
      `}
    >
      {children}
    </Link>
  );
}
