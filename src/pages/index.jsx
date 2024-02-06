import React from 'react';
import PageLayout from '../components/PageLayout.component';
import EventsList from '../components/events/EventsList.component';
import { useEventsContext } from '../context/Events.context';

function HomePage() {
	const { featured } = useEventsContext();

	return (
		<PageLayout>
			<div className='container-sm'>
				<EventsList data={featured} />
			</div>
		</PageLayout>
	);
}

export default HomePage;
