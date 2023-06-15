import Input from "components/Input/Input";
import CustomNavigation from "components/Navigation/CustomNavigation";

import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Router,
  useHistory,
  useLocation,
} from "react-router-dom";

import { useUserStore } from "store/role";
import { useLogout } from "services/auth/auth.mutation";
import { useCookies } from "react-cookie";

export interface MainNav2LoggedProps {}

const CustomMainNav: FC<MainNav2LoggedProps> = () => {
  const lists = [
    { name: "제목+내용", value: "keyword" },
    { name: "태그", value: "hashtag" },
    { name: "작성자", value: "user" },
  ];
  const [selected, setSelected] = useState(lists[0]);
  const [keyword, setKeyword] = useState("");
  const { users } = useUserStore();

  const history = useHistory();
  const location = useLocation();

  const handleInput = (e: any) => {
    setKeyword(e.target.value);
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      const paramObj = {
        type: selected.value,
        keyword: keyword,
      };

      history.push({
        pathname: "/search-result",
        search: new URLSearchParams(paramObj).toString(),
      });
    }
  };

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 750 ? true : false
  );
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const [cookie, , removeCookie] = useCookies(["creMappId"]);

  const { mutate: logout } = useLogout((response: any) => {
    removeCookie("creMappId");
    localStorage.removeItem("accessToken");
    history.push("/login");
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`nc-MainNav nc-MainNav2 relative z-10`}>
        <div className="container py-2 relative flex justify-between items-center space-x-4 xl:space-x-8">
          <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
            <Link to="/" className="ttnc-logo inline-block text-primary-6000">
              <p className="font-bold text-lg text-neutral-900 dark:text-neutral-200 py-1 px-2 my-2">
                {`boilerplate`}
              </p>
            </Link>
          </div>

          <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="flex items-center xl:flex space-x-2">
              <div className="hidden sm:block flex-grow max-w-xs"></div>
              <div className="hidden sm:block "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomMainNav;
