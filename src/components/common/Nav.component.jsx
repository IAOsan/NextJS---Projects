import Link from 'next/link';
import classNames from 'classnames';

export function Nav({ align, className, children, ...rest }) {
	const alignments = {
		right: 'ml-auto',
	};
	const classname = classNames(alignments[align], className);

	return (
		<ul
			{...rest}
			className={classname}
		>
			{children}
		</ul>
	);
}

export function NavItem({ className, children, ...rest }) {
	const classname = classNames(className);

	return (
		<li
			{...rest}
			className={classname}
		>
			{children}
		</li>
	);
}

export function NavLink({ href, className, children, ...rest }) {
	const classname = classNames(className);

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
