import Header from 'components/Header/Header';
import React, { FC, Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PathName } from 'routers/types';
import { Popover, Transition } from '@headlessui/react';
import { CogIcon, ShoppingCartIcon } from '@heroicons/react/solid';

export type SiteHeaders = 'Header 1' | 'Header 2' | 'Header 3';

interface HomePageItem {
  name: string;
  slug: PathName;
}

let OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};
let OBSERVER: IntersectionObserver | null = null;

export interface HeaderContainerProps {
  className?: string;
}

const HeaderContainer: FC<HeaderContainerProps> = ({ className = '' }) => {
  const anchorRef = React.useRef<HTMLDivElement>(null);

  let [headers] = React.useState<SiteHeaders[]>([
    'Header 1',
    'Header 2',
    'Header 3',
  ]);

  let [homePages] = React.useState<HomePageItem[]>([
    {
      name: 'Home Main',
      slug: '/',
    },
  ]);
  const [headerSelected, setHeaderSelected] =
    React.useState<SiteHeaders>('Header 3');

  const [isTopOfPage, setIsTopOfPage] = React.useState(window.pageYOffset < 5);
  const location = useLocation();

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsTopOfPage(entry.isIntersecting);
    });
  };

  useEffect(() => {
    if (!OBSERVER) {
      OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS);
      anchorRef.current && OBSERVER.observe(anchorRef.current);
    }
  }, []);

  return (
    <>
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
      <Header isTopOfPage={isTopOfPage} mainNavStyle={'style2Logedin'} />
    </>
  );
};

export default HeaderContainer;
