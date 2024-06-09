"use client";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

// Define Sidebar with destructured props
const Sidebar = ({ user }: SidebarProps) => {
  // Get pathname using usePathname hook
  const pathname = usePathname();
  return (
    // Main section for the sidebar
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Optima logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Optima</h1>
        </Link>
        {/* Map through sidebarLinks to create navigation links */}
        {sidebarLinks.map((item) => {
          // Determine if the current item is active based on the pathname
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
