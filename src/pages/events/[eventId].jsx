import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout.component';
import EventDetailHeading from '../../components/eventDetail/EventDetailHeading.component';
import EventDetailCard from '../../components/eventDetail/EventDetailCard.component';
import { useEventsContext } from '../../context/Events.context';

function EventDetail() {
	const { query } = useRouter();
	const { getEventById } = useEventsContext();

	const event = getEventById(query.eventId) || {
		address: {},
	};

	return (
		<PageLayout>
			<EventDetailHeading>{event.title}</EventDetailHeading>
			<EventDetailCard
				image={event.image}
				date={event.date}
				address={event.address}
			/>
			<div className='container-md'>
				<p className='mt-40 text-justify'>{event.description}</p>
			</div>
		</PageLayout>
	);
}

export default EventDetail;
