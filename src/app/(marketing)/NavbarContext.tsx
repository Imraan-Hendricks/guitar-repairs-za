'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

interface ObserverData {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}

interface Observer {
  home: ObserverData;
  about: ObserverData;
  services: ObserverData;
  packages: ObserverData;
  pricing: ObserverData;
  exclusiveDeal: ObserverData;
  testimonials: ObserverData;
  contact: ObserverData;
}

type ObserverName =
  | 'home'
  | 'about'
  | 'services'
  | 'packages'
  | 'pricing'
  | 'exclusiveDeal'
  | 'testimonials'
  | 'contact';

interface ContextProps {
  observer: Observer;
  setIsVisible: (isVisible: boolean, name: ObserverName) => void;
  handleIsActive(name: ObserverName): void;
  isActive: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ScrollRefsContext = createContext<ContextProps | null>(null);

export function useNavbarContext(): ContextProps {
  const context = useContext(ScrollRefsContext);
  if (!context) {
    throw new Error('useScrollRefs must be used within a ScrollRefsProvider');
  }
  return context;
}

interface ScrollAnchor {
  name: ObserverName;
}

export function NavbarProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const exclusiveDealRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [homeIsVisbile, setHomeIsVisible] = useState(false);
  const [aboutIsVisbile, setAboutIsVisible] = useState(false);
  const [servicesIsVisibile, setServicesIsVisible] = useState(false);
  const [packagesIsVisible, setPackagesIsVisible] = useState(false);
  const [pricingIsVisibile, setPricingIsVisible] = useState(false);
  const [exclusiveDealIsVisibile, setExclusiveDealIsVisible] = useState(false);
  const [testimonialsIsVisible, setTestimonialsIsVisible] = useState(false);
  const [contactIsVisible, setContactIsVisible] = useState(false);

  const setIsVisible = useCallback(
    (isVisible: boolean, name: ObserverName) => {
      if (name === 'home') setHomeIsVisible(isVisible);
      if (name === 'about') setAboutIsVisible(isVisible);
      if (name === 'services') setServicesIsVisible(isVisible);
      if (name === 'packages') setPackagesIsVisible(isVisible);
      if (name === 'pricing') setPricingIsVisible(isVisible);
      if (name === 'exclusiveDeal') setExclusiveDealIsVisible(isVisible);
      if (name === 'testimonials') setTestimonialsIsVisible(isVisible);
      if (name === 'contact') setContactIsVisible(isVisible);
    },
    [
      setHomeIsVisible,
      setAboutIsVisible,
      setServicesIsVisible,
      setPackagesIsVisible,
      setPricingIsVisible,
      setExclusiveDealIsVisible,
      setTestimonialsIsVisible,
      setContactIsVisible,
    ],
  );

  const [isActive, setIsActive] = useState<ObserverName | ''>('');

  const handleIsActive = useCallback(
    (name: ObserverName | 'home') => {
      if (contactIsVisible && name === 'contact') return setIsActive('contact');
      if (testimonialsIsVisible && name === 'testimonials')
        return setIsActive('testimonials');
      if (exclusiveDealIsVisibile && name === 'exclusiveDeal')
        return setIsActive('exclusiveDeal');
      if (pricingIsVisibile && name === 'pricing')
        return setIsActive('pricing');
      if (packagesIsVisible && name === 'packages')
        return setIsActive('packages');
      if (servicesIsVisibile && name === 'services')
        return setIsActive('services');
      if (aboutIsVisbile && name === 'about') return setIsActive('about');
      if (homeIsVisbile && name === 'home') return setIsActive('home');
      return setIsActive('');
    },
    [
      homeIsVisbile,
      aboutIsVisbile,
      servicesIsVisibile,
      packagesIsVisible,
      pricingIsVisibile,
      exclusiveDealIsVisibile,
      testimonialsIsVisible,
      contactIsVisible,
    ],
  );

  const observer: Observer = {
    home: { ref: homeRef, isVisible: homeIsVisbile },
    about: { ref: aboutRef, isVisible: aboutIsVisbile },
    services: { ref: servicesRef, isVisible: servicesIsVisibile },
    packages: { ref: packagesRef, isVisible: packagesIsVisible },
    pricing: { ref: pricingRef, isVisible: pricingIsVisibile },
    exclusiveDeal: {
      ref: exclusiveDealRef,
      isVisible: exclusiveDealIsVisibile,
    },
    testimonials: { ref: testimonialsRef, isVisible: testimonialsIsVisible },
    contact: { ref: contactRef, isVisible: contactIsVisible },
  };

  return (
    <ScrollRefsContext.Provider
      value={{
        observer,
        setIsVisible,
        handleIsActive,
        isActive,
        isOpen,
        setIsOpen,
      }}>
      {children}
    </ScrollRefsContext.Provider>
  );
}

export function ScrollAnchor({
  children,
  name,
}: PropsWithChildren<ScrollAnchor>) {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { observer, setIsVisible, handleIsActive } = useNavbarContext();

  useEffect(() => {
    setIsVisible(inView, name);
    if (inView) handleIsActive(name);
  }, [name, inView, setIsVisible, handleIsActive]);

  return (
    <div ref={observer[name].ref}>
      <div ref={ref}>{children}</div>
    </div>
  );
}
