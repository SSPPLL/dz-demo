import { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export type CardLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
	LinkProps & {
		children: ReactNode;
	};