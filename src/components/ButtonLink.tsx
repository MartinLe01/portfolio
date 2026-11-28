import type { ComponentPropsWithoutRef } from 'react';
import { type buttonVariation, variationStyles } from '../types';

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant: buttonVariation;
  children: React.ReactNode;
};

export function ButtonLink({ children, variant, ...rest }: ButtonLinkProps) {
  return (
    <a {...rest} className={`${variationStyles[variant]} inline-flex`}>
      {children}
    </a>
  );
}
