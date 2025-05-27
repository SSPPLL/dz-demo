import { ReactElement } from 'react';
import Link from 'next/link';
import cn from 'classnames'
import styles from './Header.module.scss'
import { HeaderProps } from './types';
import GithubLogo from './git.svg'

export const Header = ({
	className,
	...props
}: HeaderProps): ReactElement => {
	return (
		<header {...props} className={cn(styles.defaults, className)}>
			<Link className={styles.logo} href='/'>.my_blog</Link>
			<Link className={styles.github_link} href='https://github.com/SSPPLL' target='_blank'>
				<GithubLogo className={styles.github} />
			</Link>
		</header>
	)
}