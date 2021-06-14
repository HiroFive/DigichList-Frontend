import React from 'react';
import { SubmitBtn } from '../FormElements';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extends-expect'

test('render SubmitButton', () => {
    const { getByTestId } = renderer.create(<SubmitBtn test='test text' />);
    expect(getByTestId('submit-button')).toHaveTextContent('')
});
