import classNames from 'classnames';
import styles from './EventDetailHeading.styles.module.css';

export default function EventDetailHeading({ children }) {
	const classname = classNames(styles.title, 'title-2 text-center mb-40');

	return <h1 className={classname}>{children}</h1>;
}
