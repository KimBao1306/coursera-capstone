import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Banner from '.';

describe('Banner', () => {
	it('Testing snapshot component: Banner', () => {
		const rendered = render(<Banner onOpenReservationDialog={() => {}} />);

		expect(rendered).toMatchSnapshot();
	});
});
