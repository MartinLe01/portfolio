import { ButtonLink } from './ButtonLink';
import { Button } from './Button';
import { LanguageSwitch } from './LanguageSwitch';
import menu from '../assets/Hamburger_menu.svg';

const linkTitles: string[] = [
  'Home',
  'About-me',
  'Projects',
  'My-skills',
  'Contact',
];

export function MobileHeader() {
  return (
    <header className="lg:hidden sticky top-0">
      <div className="p-5 bg-cream-tinted border-b-3 border-ink flex justify-between items-center">
        <a href="#" className="font-display text-3xl">
          [ML]
        </a>

        <div className="flex items-center gap-2">
          <LanguageSwitch current="en" />
          <Button variant="icon_ghost">
            <img src={menu} alt="hamburger menu" className="w-8" />
          </Button>
        </div>
      </div>

      <nav className="bg-cream-tinted p-5 border-b-3 border-ink">
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
