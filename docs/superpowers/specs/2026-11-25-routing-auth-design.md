# Routing and Authentication Design

## Intent

Extend the existing Skypro Kanban homework with client-side routing and a predictable in-memory authentication flow while preserving the current board and popup appearance.

## Goals

- Provide seven page components under `src/pages`: login, registration, board, card view/edit, new task, exit, and 404.
- Initialize React Router with instant client-side navigation.
- Keep route declarations in `AppRoutes` and move board rendering out of `App`.
- Protect `/`, `/exit`, `/card/:id`, and `/new-card` behind `isAuth`.
- Redirect unauthenticated users to `/login`.
- Change authentication only through login/register/logout UI controls backed by `useState`.
- Read the card identifier with `useParams` and display it on every card-route transition.
- Style every non-modal page with Styled Components.

## Non-goals

- Backend authentication, persistent sessions, form validation against an API, or task persistence.
- Background-location modal routing and browser-history restoration for modal overlays.
- Redesigning the existing Kanban board.

## Constraints

- Preserve React, Vite, JavaScript, React Router DOM, Vitest, Testing Library, and Styled Components.
- Reuse existing board and popup components where practical.
- Use `/new-card` for the new-task page because the rubric omits its exact path.
- Keep direct URL access working through Vite's SPA fallback.

## Approaches

1. Selected: conventional page routes with route-driven modal-looking pages. This directly satisfies the rubric, supports direct URLs, and keeps implementation easy to test.
2. Rejected: background-location modal routes. This offers richer overlay history behavior but adds state and routing complexity not required by the homework.
3. Rejected: hash routing. This avoids server fallback configuration but conflicts with the required clean route paths.

## Architecture

`main.jsx` owns `BrowserRouter`. `App.jsx` owns only global presentation, `isAuth` state, and `AppRoutes`. `AppRoutes` declares public routes and wraps protected pages with `ProtectedRoute`. Login and registration receive an authentication callback; the exit page receives a logout callback. Existing header/card actions use React Router links instead of hash anchors.

## User flows

- Opening a protected URL while signed out redirects to `/login`.
- Submitting login or registration sets `isAuth` to true and navigates to `/`.
- Opening a card navigates to `/card/:id`; the page visibly includes that ID.
- Creating a task navigates to `/new-card`.
- Choosing exit navigates to `/exit`; confirming sets `isAuth` to false and redirects to `/login`, while cancelling returns to `/`.
- Unknown URLs render the styled 404 page.

## Verification

- Route integration tests cover public pages, protected redirects, login, logout, unknown paths, and changing card IDs.
- Existing board tests remain green after components receive router-aware links.
- Production build succeeds.
