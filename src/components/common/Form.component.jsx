import classNames from 'classnames';
import styles from './Form.styles.module.css';

export function Form({ className, children, ...rest }) {
	const classname = classNames(styles.wrapper, className);

	return (
		<form
			className={classname}
			{...rest}
		>
			{children}
		</form>
	);
}

export function FormLabel({ className, children, ...rest }) {
	const classname = classNames(className);

	return (
		<label
			className={classname}
			{...rest}
		>
			{children}
		</label>
	);
}

export function FormGroup({ inline, className, children, ...rest }) {
	const classname = classNames({ 'd-inline-block': inline }, className);

	return (
		<div
			className={classname}
			{...rest}
		>
			{children}
		</div>
	);
}

export function FormControl({ type, className, children, ...rest }) {
	const classname = classNames(styles.control, className);

	if (type === 'select') {
		return (
			<select
				className={classname}
				{...rest}
			>
				{children}
			</select>
		);
	}

	return (
		<input
			type={type}
			className={classname}
			{...rest}
		/>
	);
}
