import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import FormReservation from '.';

describe('FormReservation', () => {
	it('Testing snapshot component: FormReservation', () => {
		const rendered = render(
			<FormReservation isOpen={false} onClose={() => {}} />
		);

		expect(rendered).toMatchSnapshot();
	});
});
