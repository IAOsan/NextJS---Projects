import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.styles.module.css';

export function Navbar({ className, children, ...rest }) {
	const classname = classNames(
		styles.wrapper,
		'flex flex-ai-c flex-jc-sb',
		className
	);

	return (
		<nav
			{...rest}
			className={classname}
		>
			{children}
		</nav>
	);
}

export function NavbarLogo({ href, className, children, ...rest }) {
	const classname = classNames(styles.logo, className);

	if (href) {
		return (
			<Link
				{...rest}
				className={classname}
				href={href}
			>
				{children}
			</Link>
		);
	}

	return (
		<span
			{...rest}
			className={classname}
		>
			{children}
		</span>
	);
}
