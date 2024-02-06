export function normalizeEvents(list) {
	return list.reduce((acc, evt) => {
		acc[evt.id] = evt;
		return acc;
	}, {});
}
