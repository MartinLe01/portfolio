type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-cream-tinted p-4 md:p-6 border-3 border-ink shadow-neo-md">
      {children}
    </div>
  );
}
