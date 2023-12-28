import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Navbar from '.';

describe('Navbar', () => {
	it('Testing snapshot component: Navbar', () => {
		const rendered = render(<Navbar />);

		expect(rendered).toMatchSnapshot();
	});
});
