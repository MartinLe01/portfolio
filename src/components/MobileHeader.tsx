import { ButtonLink } from './ButtonLink';
import { Button } from './Button';
import { LanguageSwitch } from './LanguageSwitch';
import menu from '../assets/Hamburger_menu.svg';
import { useState } from 'react';

const linkTitles: string[] = [
  'Home',
  'About-me',
  'Projects',
  'My-skills',
  'Contact',
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="lg:hidden sticky top-0 z-30">
      <div className="p-5 bg-cream-tinted border-b-3 border-ink flex justify-between items-center relative z-10">
        <a href="#" className="font-display text-3xl font-extrabold">
          [ML]
        </a>

        <div className="flex items-center gap-2">
          <LanguageSwitch current="en" />
          <Button variant="icon_ghost" onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} alt="hamburger menu" className="w-8" />
          </Button>
        </div>
      </div>

      <nav
        inert={!isOpen}
        className={`bg-cream-tinted p-5 border-b-3 border-ink absolute left-0 right-0 top-full transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ul className="flex flex-col gap-2 w-full font-heading">
          {linkTitles.map((item) => {
            return (
              <li key={item}>
                <ButtonLink variant="navlink_ghost">
                  {item.replaceAll('-', ' ')}
                </ButtonLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
