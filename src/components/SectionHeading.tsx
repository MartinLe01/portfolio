type SectionHeadingProps = {
  orderNum: number;
  title: string;
};

export function SectionHeading({ orderNum, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 font-heading">
      <div className="text-2xl md:text-[32px] text-cream w-10 h-10 bg-blueberry border-3 border-ink flex justify-center items-center shadow-neo-sm">
        {orderNum}
      </div>
      <h2 className="text-[32px] md:text-[40px] font-bold">{title}</h2>
    </div>
  );
}
