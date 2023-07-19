import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Schedule from './Schedule';

describe('Schedule', () => {
    const setSchedule = jest.fn();

    it('renders without crashing', () => {
        render(<Schedule setSchedule={setSchedule} />);
    });

    it('calls setSchedule with correct data on form submission', () => {
        const { getByTestId, getByLabelText } = render(<Schedule setSchedule={setSchedule} />);
        const form = getByTestId('schedule-form');

        fireEvent.change(getByLabelText(/Chest and Triceps/i), { target: { value: '12:00-13:00' } });
        fireEvent.submit(form);

        expect(setSchedule).toHaveBeenCalled();
        expect(setSchedule).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({ title: 'Chest and Triceps', time: '12:00-13:00' })
        ]));
    });

});

