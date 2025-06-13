import { PolymorphicComponentProps } from '@/types/PolymorphicComponentProps';
import { ElementType, ReactNode } from 'react';

export type ButtonAllowedTags = 'button' | 'a';

export type ButtonProps<T extends ElementType & ButtonAllowedTags> = PolymorphicComponentProps<T, {
	children: ReactNode,
	disabled?: boolean
}>;