import classNames from 'classnames';
import styles from './Alert.styles.module.css';

export function Alert({ type, className, children }) {
	const types = {
		danger: styles.danger,
		warning: styles.warning,
		primary: styles.primary,
	};
	const classname = classNames(styles.alert, types[type], className);

	return <div className={classname}>{children}</div>;
}
