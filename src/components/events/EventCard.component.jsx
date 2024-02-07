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
		<Card className='bg-light-50 text-left'>
			<CardImageThumbnail>
				<img
					src={image}
					alt=''
				/>
			</CardImageThumbnail>
			<CardBody>
				<CardTitle className='mb-12'>{title}</CardTitle>
				<p className='text-muted'>
					<span
						className='icon-calendar mr-8'
						aria-hidden
					></span>
					<b>{date}</b>
				</p>
				<p className='text-muted'>
					<span
						className='icon-location mr-8'
						aria-hidden
					></span>
					<i>
						{address.street} <br /> {address.city}
					</i>
				</p>
				<Button
					className={styles.link}
					variant='contained'
					color='primary'
					href={`/events/${id}`}
					type='link'
				>
					<span className='mr-12'>Explore Event</span>
					<span
						className='icon-arrow-right'
						aria-hidden
					></span>
				</Button>
			</CardBody>
		</Card>
	);
}

export default EventCard;
