export function ComponentState({
	hasError,
	isLoading,
	isEmpty,
	errorState,
	loadingState,
	emptyState,
	children,
}) {
	if (hasError) {
		return errorState;
	}

	if (isLoading) {
		return loadingState;
	}

	if (isEmpty) {
		return emptyState;
	}

	return children;
}

export default ComponentState;
