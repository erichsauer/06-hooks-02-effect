import React from 'react';
import { screen, render } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import AvatarList from './AvatarList';
import { MemoryRouter } from 'react-router-dom';

// const server = setupServer(
//   rest.get('api url', (req, res, ctx) => {
//     return res(ctx.json({ some: 'json' }));
//   })
// );

describe('Avatar container', () => {
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());

  it('should render a list of characters to the screen on load that link to individual details pages', async () => {
    render(
      <MemoryRouter>
        <AvatarList />
      </MemoryRouter>
    );
    screen.getByText('Loading...');

    await screen.findByText('Analay');
  });
});
