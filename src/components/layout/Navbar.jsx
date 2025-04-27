import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="w-full p-4 shadow-md bg-white flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 justify-center">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 font-semibold hover:text-green-600 hover:underline transition"
              >
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="flex items-center gap-2 px-4 py-2 font-semibold hover:text-green-600 hover:underline transition"
              >
                <FontAwesomeIcon icon={faUser} />
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/services"
                className="flex items-center gap-2 px-4 py-2 font-semibold hover:text-green-600 hover:underline transition"
              >
                <FontAwesomeIcon icon={faBriefcase} />
                Services
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 font-semibold hover:text-green-600 hover:underline transition"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
