type TagType = 'green' | 'coral' | 'default';

const tagStyles: Record<TagType, string> = {
  green: 'bg-[#CCFFCC] border-[#008000]',
  coral: 'bg-[#F7B267] border-[#EA4D0A]',
  default: 'bg-[#FEEFC7] border-ink',
};

type TagProps = {
  children: React.ReactNode;
  type: TagType;
};

export function Tag({ children, type }: TagProps) {
  return (
    <div
      className={`${tagStyles[type]} text-sm px-2 py-1 rounded-full inline-block border-2`}
    >
      {children}
    </div>
  );
}
