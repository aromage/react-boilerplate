import React, { FC, useEffect, useRef, useState } from "react";

import { useLocation } from "react-router-dom";

import CustomMainNav from "./CustomMainNav";

export interface HeaderProps {
  mainNavStyle?: "style1" | "style2" | "style2Logedin";
  isTopOfPage?: boolean;
}

let MAIN_MENU_HEIGHT = 0;
let WIN_PREV_POSITION = window.pageYOffset;

const Header: FC<HeaderProps> = ({ mainNavStyle = "style1", isTopOfPage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  //
  //
  const location = useLocation();

  const showSingleMenu = location.pathname.search(/^\/single/g) > -1;
  //
  const [isSingleHeaderShowing, setIsSingleHeaderShowing] = useState(false);

  useEffect(() => {
    if (!mainMenuRef.current) {
      return;
    }
    MAIN_MENU_HEIGHT = mainMenuRef.current.offsetHeight;
    window.addEventListener("scroll", handleShowHideHeaderMenuEvent);
    return () => {
      window.removeEventListener("scroll", handleShowHideHeaderMenuEvent);
    };
  }, []);

  useEffect(() => {
    if (showSingleMenu) {
      //  BECAUSE DIV HAVE TRANSITION 100ms
      setTimeout(() => {
        window.addEventListener("scroll", handleShowHideSingleHeadeEvent);
      }, 200);
    } else {
      window.removeEventListener("scroll", handleShowHideSingleHeadeEvent);
    }
    return () => {
      window.removeEventListener("scroll", handleShowHideSingleHeadeEvent);
    };
  }, [showSingleMenu]);

  const handleShowHideSingleHeadeEvent = () => {
    window.requestAnimationFrame(showHideSingleHeade);
  };
  const handleShowHideHeaderMenuEvent = () => {
    window.requestAnimationFrame(showHideHeaderMenu);
  };

  const handleProgressIndicator = () => {
    const entryContent = document.querySelector(
      "#single-entry-content"
    ) as HTMLDivElement | null;

    if (!showSingleMenu || !entryContent) {
      return;
    }

    const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let scrolled = (winScroll / totalEntryH) * 100;
    if (!progressBarRef.current || scrolled > 140) {
      return;
    }

    scrolled = scrolled > 100 ? 100 : scrolled;

    progressBarRef.current.style.width = scrolled + "%";
  };

  const showHideSingleHeade = () => {
    handleProgressIndicator();
    // SHOW _ HIDE SINGLE DESC MENU
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 600) {
      setIsSingleHeaderShowing(true);
    } else {
      setIsSingleHeaderShowing(false);
    }
  };

  const showHideHeaderMenu = () => {
    let currentScrollPos = window.pageYOffset;
    if (!containerRef.current || !mainMenuRef.current) return;

    if (Math.abs(WIN_PREV_POSITION - currentScrollPos) <= 50) {
      return;
    }

    // SHOW _ HIDE MAIN MENU
    if (WIN_PREV_POSITION > currentScrollPos) {
      containerRef.current.style.top = "0";
    } else {
      containerRef.current.style.top = `-${MAIN_MENU_HEIGHT + 2}px`;
    }

    WIN_PREV_POSITION = currentScrollPos;
  };

  return (
    <div
      className="nc-Header sticky top-0 w-full left-0 right-0 z-40 transition-all "
      ref={containerRef}
    >
      <div
        className={`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-b dark:border-neutral-700 ${
          isTopOfPage ? "!border-transparent" : ""
        }`}
        ref={mainMenuRef}
      >
        <CustomMainNav />
      </div>

      {/* {showSingleMenu && renderSingleHeader()} */}
    </div>
  );
};

export default Header;
