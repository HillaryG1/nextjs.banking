// Client component because of our use of hooks
"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
// Define MobileNav with destructured props
const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    // Square brackets are used when providing a specific value
    <section className="w-full max-w-[264px]">
      {/* Implement Shadcn Library */}
      <Sheet>
        <SheetTrigger>
          {/* Hamburger menu icon */}
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          {/* Home page link with logo */}
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Optima logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Optima
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              {/* Navigation links */}
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {/* Map through sidebarLinks to create navigation links */}
                {sidebarLinks.map((item) => {
                  // Determine if the current item is active based on the pathname
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        {/* Icon for  navigation links */}
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        {/* Labels for nav links */}
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
