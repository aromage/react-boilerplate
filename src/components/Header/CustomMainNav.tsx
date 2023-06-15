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
import Button from "components/Button/Button";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonThird from "components/Button/ButtonThird";

export interface MainNav2LoggedProps {}

const CustomMainNav: FC<MainNav2LoggedProps> = () => {
  const handleInput = (e: any) => {};

  const handleKeyUp = (e: any) => {};

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

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const history = useHistory();

  return (
    <>
      <div className={`nc-MainNav nc-MainNav2 relative z-10 bg-neutral-100`}>
        <div className="container py-2 relative flex justify-between items-center space-x-4 xl:space-x-8">
          <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
            <Link to="/" className="ttnc-logo inline-block text-primary-6000">
              <p className="font-bold text-lg text-neutral-900 dark:text-neutral-200 py-1 px-2 my-2">
                {`아둘람 주문 샘플`}
              </p>
            </Link>
          </div>

          <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
            <div className="flex items-center xl:flex space-x-2">
              <ButtonThird
                sizeClass="px-6 py-2"
                onClick={() => {
                  history.push("/bible");
                }}
              >
                매일성경
              </ButtonThird>
              <ButtonPrimary
                sizeClass="px-6 py-2"
                onClick={() => {
                  history.push("/order");
                }}
              >
                주문하기
              </ButtonPrimary>

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
