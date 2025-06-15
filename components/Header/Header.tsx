import { FC, ReactElement } from 'react';
import Link from 'next/link';
import cn from 'classnames'
import styles from './Header.module.scss'
import { HeaderProps } from './types';
import GithubLogo from './git.svg'

export const Header: FC<HeaderProps> = ({
	className,
	...props
}): ReactElement => {
	return (
		<header {...props} className={cn(styles.defaults, className)}>
			<Link className={styles.logo} href='/' aria-label='.my_blog - Перейти на главную'>.my_blog</Link>
			<Link className={styles.github_link} href='https://github.com/SSPPLL' target='_blank' aria-label='Профиль GitHub'>
				<GithubLogo className={styles.github} aria-hidden={true} />
			</Link>
		</header>
	)
}