import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout.component';
import EventDetailCard from '../../components/events/EventDetailCard.component';
import { useEventsContext } from '../../context/Events.context';

function EventDetail() {
	const { query } = useRouter();
	const { getEventById } = useEventsContext();

	const event = getEventById(query.eventId) || {
		address: {},
	};

	return (
		<PageLayout>
			<div className='container-md'>
				<h1 className='title-2 text-center mb-40'>{event.title}</h1>
				<EventDetailCard
					image={event.image}
					date={event.date}
					address={event.address}
				/>
				<p className='mt-40'>{event.description}</p>
			</div>
		</PageLayout>
	);
}

export default EventDetail;
