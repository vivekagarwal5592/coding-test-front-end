import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Variable from "./Variable.component";

test('Variable Component Renders Correctly', () => {
    render(<MemoryRouter initialEntries={[{state: [-3, -1, -2, -5, -10]}]}>
        <Variable/>
    </MemoryRouter>)
    const textElement = screen.getByText('-1')
    expect(textElement).toBeInTheDocument()

});
