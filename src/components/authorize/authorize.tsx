import { PropsWithChildren } from 'react';

export default function Authorize({ children } : PropsWithChildren) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { children }
      </ul>
    </nav>
  );
}
