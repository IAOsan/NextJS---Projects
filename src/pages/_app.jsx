import EventsContextProvider from '../context/Events.context';
import FiltersContextProvider from '../context/Filters.context';
import '../styles/global.styles.css';

function App({ Component, pageProps }) {
	return (
		<EventsContextProvider>
			<FiltersContextProvider>
				<Component {...pageProps} />
			</FiltersContextProvider>
		</EventsContextProvider>
	);
}

export default App;
