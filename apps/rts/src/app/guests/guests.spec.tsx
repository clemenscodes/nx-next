import { render } from '@testing-library/react';

import Guests from './guests';

describe('Guests', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Guests />);
        expect(baseElement).toBeTruthy();
    });
});
