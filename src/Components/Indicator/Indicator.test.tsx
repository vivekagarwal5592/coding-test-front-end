import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Indicator from "./Indicator.component";

test('Indicator Component Renders Correctly', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "type": "indicator",
            "study_type": "cci",
            "parameter_name": "period",
            "min_value": 1,
            "max_value": 99,
            "default_value": 20
        }
    }]}>
        <Indicator/>
    </MemoryRouter>)
    const textElement = screen.getByText('cci')
    expect(textElement).toBeInTheDocument()

});

test('Input box is present in the Indicator Component', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "type": "indicator",
            "study_type": "cci",
            "parameter_name": "period",
            "min_value": 1,
            "max_value": 99,
            "default_value": 20
        }
    }]}>
        <Indicator/>
    </MemoryRouter>)
    const textElement = screen.getByRole('textbox')
    expect(textElement).toBeInTheDocument()

});

test('Checking the default Input value for Input Box', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "type": "indicator",
            "study_type": "cci",
            "parameter_name": "period",
            "min_value": 1,
            "max_value": 99,
            "default_value": 20
        }
    }]}>
        <Indicator/>
    </MemoryRouter>)
    const textElement = screen.getByDisplayValue('20')
    expect(textElement).toBeInTheDocument()

});
