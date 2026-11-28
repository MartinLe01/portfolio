type BadgeProps = {
  title: string;
  imgSource: string;
  altText: string;
  badgeStyles: string;
};

export function Badge({ title, imgSource, altText, badgeStyles }: BadgeProps) {
  return (
    <div
      className={`${badgeStyles} text-base border-3 inline-block p-0.75 md:pr-2`}
    >
      <div className="flex items-center md:gap-2">
        <img src={imgSource} alt={altText} className="w-9" />
        <p className=" sr-only md:not-sr-only">{title}</p>
      </div>
    </div>
  );
}
