import PageLoyout from '../../components/PageLayout.component';
import EventsForm from '../../components/events/EventsForm.component';
import EventsList from '../../components/events/EventsList.component';
import { useFiltersContext } from '../../context/Filters.context';

function EventsPage() {
	const { filteredEvents, filterByYearOrMonth } = useFiltersContext();

	function handleFiltering(year, month) {
		filterByYearOrMonth(year, month);
		// navegar a la pagina de slug
	}

	return (
		<PageLoyout>
			<div className='container-sm'>
				<EventsForm onFilter={handleFiltering} />
				<EventsList data={filteredEvents} />
			</div>
		</PageLoyout>
	);
}

export default EventsPage;
