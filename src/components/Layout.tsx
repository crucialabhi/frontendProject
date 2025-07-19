import type { PropsWithChildren } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <div className="sticky top-0 z-5">
      <Navbar />
    </div>
    <div className="p-3">
      {children}
    </div>
  </>
);

export default Layout;
