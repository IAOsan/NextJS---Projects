import { useRouter } from 'next/navigation';
import PageLoyout from '../../components/PageLayout.component';
import EventsForm from '../../components/events/EventsForm.component';
import EventsList from '../../components/events/EventsList.component';
import { useEventsContext } from '../../context/Events.context';

function EventsPage() {
	const router = useRouter();
	const { events } = useEventsContext();

	function handleFiltering(year, month) {
		const path = `/events/${year || 'year'}/${!isNaN(month) ? month : 'month'}`;
		router.push(path);
	}

	return (
		<PageLoyout>
			<div className='container-sm'>
				<EventsForm onFilter={handleFiltering} />
				<EventsList data={events} />
			</div>
		</PageLoyout>
	);
}

export default EventsPage;
