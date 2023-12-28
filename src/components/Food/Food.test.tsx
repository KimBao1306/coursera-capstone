import {render} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import Food from '.';

describe('Food', () => {
	it('Testing snapshot component: Food', () => {
		const rendered = render(<Food />);

		expect(rendered).toMatchSnapshot();
	});
});
