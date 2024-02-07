import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout.component';
import EventsList from '../../components/events/EventsList.component';
import { Button, ComponentState, Alert } from '../../components/common';
import { useFiltersContext } from '../../context/Filters.context';
import { MONTHS } from '../../utils';

function FilteredEventsPage() {
	const router = useRouter();
	const { filterByYearOrMonth } = useFiltersContext();
	const filterData = router.query.slug;
	const [year, month] = filterData || [];
	const parsedYear = +year;
	const parsedMonth = +month;
	const filteredEvents = filterByYearOrMonth(parsedYear, parsedMonth);
	const heading =
		!isNaN(parsedYear) && !isNaN(parsedMonth)
			? `${MONTHS[parsedMonth]} ${parsedYear} events`
			: !isNaN(parsedYear)
			? `Events of ${parsedYear}`
			: !isNaN(parsedMonth)
			? `Events of ${MONTHS[parsedMonth]}`
			: '';

	function renderBackBtn() {
		return (
			<Button
				className='d-block mb-40 mx-auto'
				variant='contained'
				color='primary'
				type='link'
				href='/events'
			>
				Back to all events
			</Button>
		);
	}

	function errorState() {
		return (
			<>
				<Alert
					type='danger'
					className='mb-40'
				>
					<b className='title-5'>Invalid filter</b>
					<p>Please adjust your values!</p>
				</Alert>
				{renderBackBtn()}
			</>
		);
	}

	function loadingState() {
		return <h1>LOADING...</h1>;
	}

	function emptyState() {
		return (
			<>
				<Alert
					className='mb-40'
					type='warning'
				>
					<b className='title-5'>No events found for the chosen filter</b>
					<p>Please, try another</p>
				</Alert>
				{renderBackBtn()}
			</>
		);
	}

	return (
		<PageLayout>
			<section className='container-sm text-center'>
				<ComponentState
					hasError={
						(isNaN(year) && isNaN(month)) ||
						(!year && isNaN(parsedMonth)) ||
						parsedMonth < 0 ||
						parsedMonth > 11
					}
					isLoading={!filterData}
					isEmpty={!filteredEvents.length}
					errorState={errorState()}
					loadingState={loadingState()}
					emptyState={emptyState()}
				>
					<h2 className='mb-12'>{heading}</h2>
					{renderBackBtn()}
					<EventsList data={filteredEvents} />
				</ComponentState>
			</section>
		</PageLayout>
	);
}

export default FilteredEventsPage;
