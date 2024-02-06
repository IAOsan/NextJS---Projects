import Header from './Header.component';

function PageLayout({ children }) {
	return (
		<>
			<Header />
			<main className='py-52'>{children}</main>
		</>
	);
}

export default PageLayout;
