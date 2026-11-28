type LanguageSwitchProps = {
  current: string;
};

export function LanguageSwitch({ current }: LanguageSwitchProps) {
  const other: string = current === 'en' ? 'CZ' : 'EN';

  return (
    <button className="relative">
      <span className="border-3 border-ink p-2 text-cream text-xs bg-blueberry relative z-10 block transition ease-in-out hover:-translate-x-0.75 hover:-translate-y-0.75 active:translate-x-0.75 active:translate-y-0.75">
        {current.toUpperCase()}
      </span>
      <span className="border-3 border-ink p-2 text-cream text-xs bg-ink absolute inset-0 translate-x-0.75 translate-y-0.75">
        {other}
      </span>
    </button>
  );
}
