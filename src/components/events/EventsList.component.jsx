import React from 'react';
import EventCard from './EventCard.component';

function EventsList({ data = [] }) {
	return (
		<ul
			style={{ '--gap': '2.4rem' }}
			className='list'
		>
			{data.map((e) => (
				<li key={e.id}>
					<EventCard {...e} />
				</li>
			))}
		</ul>
	);
}

export default EventsList;
