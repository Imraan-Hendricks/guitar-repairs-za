import { NavbarProvider } from './(marketing)/NavbarContext';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <NavbarProvider>{children}</NavbarProvider>;
}
