import { createContext, useContext, useState } from 'react';
import { useEventsContext } from './Events.context';

export const FiltersContext = createContext({
	filteredEvents: [],
	filterByYearOrMonth: (year, month) => {},
});

export function useFiltersContext() {
	const ctx = useContext(FiltersContext);

	if (!ctx)
		throw new Error(
			'"FiltersContext" must be used in "FiltersContextProvider"'
		);

	return ctx;
}

function FiltersContextProvider({ children }) {
	const { events } = useEventsContext();
	const [filteredEvents, setFilteredEvents] = useState(events);

	function filterByYearOrMonth(year, month) {
		setFilteredEvents(() => {
			if (year && !isNaN(month)) {
				return events.filter((e) => {
					const parsedDate = new Date(e.date);
					return month === parsedDate.getMonth() &&
						year === parsedDate.getFullYear()
						? true
						: false;
				});
			} else if (year && !month) {
				return events.filter((e) =>
					new Date(e.date).getFullYear() === year ? true : false
				);
			} else if (!year && month) {
				return events.filter((e) =>
					new Date(e.date).getMonth() === month ? true : false
				);
			}
			return events;
		});
	}

	return (
		<FiltersContext.Provider
			value={{
				filteredEvents,
				filterByYearOrMonth,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
}

export default FiltersContextProvider;
