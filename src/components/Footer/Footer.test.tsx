import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Footer from '.';

describe('Footer', () => {
	it('Testing snapshot component: Footer', () => {
		const rendered = render(<Footer />);

		expect(rendered).toMatchSnapshot();
	});
});
