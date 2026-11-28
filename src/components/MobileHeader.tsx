import { ButtonLink } from './ButtonLink';

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
