import {render, screen} from "@testing-library/react";
import Criteria from "./Criteria.component";
import {MemoryRouter} from "react-router-dom";

test('Criteria Component Renders Correctly', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "id": 1,
            "name": "Top gainers",
            "tag": "Intraday Bullish",
            "color": "green",
            "criteria": [{"type": "plain_text", "text": "Sort - %price change in descending order"}]
        }
    }]}>
        <Criteria/>
    </MemoryRouter>)
    const textElement = screen.getByText('Sort - %price change in descending order')
    expect(textElement).toBeInTheDocument()

})

test('Criteria Component Contains link tag', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "id": 3,
            "name": "Open = High",
            "tag": "Bullish",
            "color": "green",
            "criteria": [{
                "type": "variable",
                "text": "Today’s open < yesterday’s low by $1 %",
                "variable": {"$1": {"type": "value", "values": [-3, -1, -2, -5, -10]}}
            }]
        }
    }]}>
        <Criteria/>
    </MemoryRouter>)
    const textElement = screen.getByRole('link')
    expect(textElement).toBeInTheDocument()

})

test('Criteria Component does not Contains link tag', () => {
    render(<MemoryRouter initialEntries={[{
        state: {
            "id": 2,
            "name": "Intraday buying seen in last 15 minutes",
            "tag": "Bullish",
            "color": "green",
            "criteria": [{
                "type": "plain_text",
                "text": "Current candle open = current candle high"
            }, {"type": "plain_text", "text": "Previous candle open = previous candle high"}, {
                "type": "plain_text",
                "text": "2 previous candle’s open = 2 previous candle’s high"
            }]
        }
    }]}>
        <Criteria/>
    </MemoryRouter>)
    const textElement = screen.queryByRole('link');
    expect(textElement).toBeNull()

})
