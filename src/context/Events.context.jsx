import { useState, useContext, createContext, useMemo } from 'react';
import data from '../../data.json';
import { normalizeEvents } from './normalize';

export const EventsContext = createContext({
	events: [],
	featured: [],
	getEventById: (id) => {},
});

export function useEventsContext() {
	const ctx = useContext(EventsContext);

	if (!ctx)
		throw new Error('"EventsContext" must be used in "EventsContextProvider"');

	return ctx;
}

function EventsContextProvider({ children }) {
	const normalizedEvents = useMemo(
		() => normalizeEvents(data.events),
		[data.events]
	);
	const featured = useMemo(
		() => data.events.filter((e) => e.featured),
		[data.events]
	);

	function getEventById(id) {
		return normalizedEvents[id];
	}

	return (
		<EventsContext.Provider
			value={{
				events: data.events,
				featured: featured,
				getEventById,
			}}
		>
			{children}
		</EventsContext.Provider>
	);
}

export default EventsContextProvider;
