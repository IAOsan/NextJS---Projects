import {
	Card,
	CardImageThumbnail,
	CardBody,
	CardTitle,
	Button,
} from '../common';
import styles from './EventCard.styles.module.css';

function EventCard({ id, image, title, date, address }) {
	return (
		<Card className='bg-light-50'>
			<CardImageThumbnail>
				<img
					src={image}
					alt=''
				/>
			</CardImageThumbnail>
			<CardBody>
				<CardTitle className='mb-12'>{title}</CardTitle>
				<p className='text-muted'>
					<b>{date}</b>
				</p>
				<p>
					<i className='d-block text-muted'>{address.street}</i>
					<i className='d-block text-muted'>{address.city}</i>
				</p>
				<Button
					className={styles.link}
					variant='contained'
					color='primary'
					href={`/events/${id}`}
					type='link'
				>
					Explore Event
				</Button>
			</CardBody>
		</Card>
	);
}

export default EventCard;
