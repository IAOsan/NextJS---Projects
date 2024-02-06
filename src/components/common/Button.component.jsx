import Link from 'next/link';
import classNames from 'classnames';
import styles from './Button.styles.module.css';

export function Button({
	variant,
	color,
	type,
	href,
	className,
	children,
	...rest
}) {
	const containedVariants = {
		primary: styles['button--contained-primary'],
	};
	const variants = {
		contained: containedVariants[color],
	};
	const classname = classNames(styles.button, variants[variant], className);

	if (type === 'link' && href) {
		return (
			<Link
				href={href}
				className={classname}
				{...rest}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			className={classname}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
