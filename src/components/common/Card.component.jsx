import classNames from 'classnames';
import styles from './Card.styles.module.css';

export function Card({ className, children, ...rest }) {
	const classname = classNames(styles.wrapper, 'flex', className);

	return (
		<article
			className={classname}
			{...rest}
		>
			{children}
		</article>
	);
}

export function CardImageThumbnail({ className, children, ...rest }) {
	const classname = classNames(styles['image-thumbnail'], className);

	return (
		<div
			className={classname}
			{...rest}
		>
			{children}
		</div>
	);
}

export function CardImagePreview({ className, children, ...rest }) {
	const classname = classNames(styles['image-preview'], className);

	return (
		<div
			className={classname}
			{...rest}
		>
			{children}
		</div>
	);
}

export function CardBody({ className, children, ...rest }) {
	const classname = classNames(styles.body, className);

	return (
		<div
			className={classname}
			{...rest}
		>
			{children}
		</div>
	);
}

export function CardTitle({ className, children, ...rest }) {
	const classname = classNames(styles.title, className);

	return (
		<h3
			className={classname}
			{...rest}
		>
			{children}
		</h3>
	);
}
