import { Card, CardBody, CardImagePreview } from '../common';
import styles from './EventDetailCard.styles.module.css';
import classNames from 'classnames';

function EventDetailCard({ image, date, address }) {
	const wrapperClassname = classNames(styles.wrapper, 'bg-dark');

	return (
		<Card className={wrapperClassname}>
			<CardImagePreview>
				<img
					className='border border-md border-light rounded-circle'
					src={image}
					alt=''
				/>
			</CardImagePreview>
			<CardBody className='flex flex-column flex-jc-c'>
				<p className='title-5 c-primary-100'>{date}</p>
				<p className='title-5 c-primary-100'>
					<i className='d-block'>{address.street}</i>
					<i className='d-block'>{address.city}</i>
				</p>
			</CardBody>
		</Card>
	);
}

export default EventDetailCard;
