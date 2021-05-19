import React from 'react';
import { screen, render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AvatarDetail from './AvatarDetail';
import { MemoryRouter } from 'react-router';

const server = setupServer(
  rest.get('api url', (req, res, ctx) => {
    return res(ctx.json({ some: 'json' }));
  })
);

describe('AvatarDetail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should render a detailed character page', async () => {
    render(
      <MemoryRouter>
        <AvatarDetail match={{ params: { id: '5cf5679a915ecad153ab68d1' } }} />
      </MemoryRouter>
    );
    screen.getByText('Loading...');

    await screen.findByText('Analay (Female)');
  });
});
