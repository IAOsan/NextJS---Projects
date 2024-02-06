import classNames from 'classnames';
import { Form, FormLabel, FormGroup, FormControl, Button } from '../common';
import { useFiltersContext } from '../../context/Filters.context';
import styles from './EventsForm.styles.module.css';

function EventsForm({ onFilter }) {
	const { filterByYearOrMonth } = useFiltersContext();
	const groupClassname = classNames(styles.group, 'flex flex-ai-c mr-16');

	function generateYearOptions(numberOfYears) {
		const actualYear = new Date().getFullYear();
		const opts = [
			<option
				key='defaultYear'
				value=''
			>
				-Select year-
			</option>,
		];
		for (let i = 0; i <= numberOfYears; i++) {
			const year = actualYear - i;
			opts.push(
				<option
					key={i}
					value={year}
				>
					{year}
				</option>
			);
		}
		return opts;
	}

	function generateMonthOptions() {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const opts = [
			<option
				key='defaultMonth'
				value=''
			>
				-Select month-
			</option>,
		];
		for (let i = 0; i < 12; i++) {
			opts.push(
				<option
					key={i}
					value={i}
				>
					{months[i]}
				</option>
			);
		}
		return opts;
	}

	function handleSubmit(e) {
		e.preventDefault();
		const { yearInput, monthInput } = e.target.elements;

		const year = parseInt(yearInput.value);
		const month = parseInt(monthInput.value);

		onFilter(year, month);
	}

	return (
		<Form
			onSubmit={handleSubmit}
			id='filterForm'
			className='flex bg-light-50 p-16 mb-40'
		>
			<FormGroup className={groupClassname}>
				<FormLabel
					htmlFor='yearInput'
					className='d-inline-block mr-12'
				>
					<b>Year</b>
				</FormLabel>
				<FormControl
					defaultValue=''
					id='yearInput'
					type='select'
					name='year'
					form='filterForm'
					title='Select a year'
				>
					{generateYearOptions(4)}
				</FormControl>
			</FormGroup>
			<FormGroup className={groupClassname}>
				<FormLabel
					htmlFor='monthInput'
					className='d-inline-block mr-12'
				>
					<b>Month</b>
				</FormLabel>
				<FormControl
					defaultValue=''
					id='monthInput'
					type='select'
					name='month'
					form='filterForm'
					title='Select a month'
				>
					{generateMonthOptions()}
				</FormControl>
			</FormGroup>
			<Button
				className={styles.submit}
				variant='contained'
				color='primary'
				type='submit'
			>
				Find Events
			</Button>
		</Form>
	);
}

export default EventsForm;
