import React, { FC, Fragment, useEffect } from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";

import { Popover, Transition } from "@headlessui/react";
import CustomNavItem from "./CustomNavItem";
import { useUserStore } from "store/role";
interface NavProps {
  nav?: NavItemType;
}

const CustomNavigation: FC<NavProps> = ({ nav = [] }) => {
  const ulRef = React.createRef<HTMLUListElement>();

  const { getUserRole } = useUserStore();
  const role = getUserRole();

  return (
    <React.Fragment>
      <Popover className="relative">
        {({ open }) => {
          return (
            <>
              <Popover.Button className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute left-0 z-10 w-screen max-w-sm mt-3"
                >
                  <ul
                    className="lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative"
                    ref={ulRef}
                  >
                    <CustomNavItem key={nav.id} menuItem={nav} role={role} />
                  </ul>
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default CustomNavigation;
