import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from './Home.component';
import {BrowserRouter} from "react-router-dom";
import {rest} from 'msw'
import {setupServer} from "msw/node";
import user from "@testing-library/user-event"
import App from "../../App";

const response = rest.get('http://localhost:8080/api/stock', (req, res, ctx) => {
    return res(ctx.json([{
        "id": 1,
        "name": "Top gainers",
        "tag": "Intraday Bullish",
        "color": "green",
        "criteria": [{"type": "plain_text", "text": "Sort - %price change in descending order"}]
    },]))
})

const handlers = [response]

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Home Component renders correctly', async () => {
    render(<BrowserRouter><Home/></BrowserRouter>);
    const linkElement = await screen.findByText('Top gainers');
    expect(linkElement).toBeVisible();
});

test('Click on event opens new page', async () => {
    user.setup()
    render(<BrowserRouter><App/></BrowserRouter>);
    const linkElement = await screen.findByText('Top gainers');
    await user.click(linkElement)
    const newPageElement = await screen.findByText('Sort - %price change in descending order');
    expect(newPageElement).toBeVisible();
});
