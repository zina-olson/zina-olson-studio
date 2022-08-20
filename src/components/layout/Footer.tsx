import { ReactElement } from 'react';

export function Footer(): ReactElement {
  return (
    <div className="footer-container">
      <footer className="w-full h-32 p-12 text-center text-xs font-semibold">
        © 2022{' '}
        <a href="https://olson.studio" rel="noopener" target="_blank">
          Olson Studio
        </a>
        . All Rights Reserved.
      </footer>
    </div>
  );
}
