# Routing and Authentication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add all rubric-required pages, client-side routes, protected navigation, and UI-driven login/logout to the existing Skypro Kanban app.

**Architecture:** `BrowserRouter` is initialized in `main.jsx`; `App` owns the in-memory `isAuth` state and delegates route declarations to `AppRoutes`. Public authentication pages receive an `onLogin` callback, protected pages render through `ProtectedRoute`, and existing board controls navigate with React Router links.

**Tech Stack:** React 19, React Router DOM 7, Styled Components 6, Vite 8, Vitest 5, Testing Library

**Spec:** `docs/superpowers/specs/2026-11-25-routing-auth-design.md`

## Global Constraints

- Create exactly seven page components under `src/pages`.
- Protect `/`, `/exit`, `/card/:id`, and `/new-card`; redirect signed-out users to `/login`.
- Expose `/login`, `/register`, and `*` publicly.
- Authentication changes only from user-facing login/register/logout controls via `useState`.
- Card ID comes from `useParams` and is visibly rendered.
- Non-modal pages use Styled Components; preserve the current board visual direction.
- Do not add dependencies.

## Review Focus

- A direct visit to each protected URL while signed out must land on `/login`.
- Login from a redirected protected URL must produce a stable authenticated board state.
- Confirming logout must revoke access before redirecting, so browser navigation cannot reveal a protected page.
- Navigating between two `/card/:id` URLs must update the visible ID without a reload.
- An arbitrary unknown URL must render 404 rather than redirecting or crashing.

---

### Task 1: Router shell and protected-route contract

**Files:**
- Create: `src/routes/ProtectedRoute.jsx`
- Create: `src/routes/AppRoutes.jsx`
- Create: `src/routes/AppRoutes.test.jsx`
- Modify: `src/main.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `isAuth: boolean`, `onLogin: () => void`, `onLogout: () => void`
- Produces: `ProtectedRoute({ isAuth, children })` and `AppRoutes({ isAuth, onLogin, onLogout })`

- [x] Write failing route integration tests proving signed-out protected URLs redirect to login and unknown URLs render 404.
- [x] Run `npm.cmd test -- src/routes/AppRoutes.test.jsx` and verify failures are caused by missing route components.
- [x] Implement the router shell, authentication state wiring, and minimal route placeholders.
- [x] Run the focused test and the complete suite; confirm both pass before refactoring.
- [ ] Commit the routing shell and its tests as one checkpoint.

### Task 2: Seven pages and styled public states

**Files:**
- Create: `src/pages/LoginPage/LoginPage.jsx`
- Create: `src/pages/RegisterPage/RegisterPage.jsx`
- Create: `src/pages/MainPage/MainPage.jsx`
- Create: `src/pages/CardPage/CardPage.jsx`
- Create: `src/pages/NewCardPage/NewCardPage.jsx`
- Create: `src/pages/ExitPage/ExitPage.jsx`
- Create: `src/pages/NotFoundPage/NotFoundPage.jsx`
- Create: `src/pages/AuthPages.styled.js`
- Create: `src/pages/NotFoundPage/NotFoundPage.styled.js`
- Modify: `src/routes/AppRoutes.jsx`
- Test: `src/routes/AppRoutes.test.jsx`

**Interfaces:**
- Consumes: `onLogin()` on login/register pages, `onLogout()` on exit page
- Produces: seven default-exported page components used by `AppRoutes`

- [ ] Add failing tests for login, registration, authenticated board, new-task, exit, and 404 page behavior.
- [ ] Run the focused route test and verify each new assertion fails for the expected missing behavior.
- [ ] Implement the seven pages, reusing `Main`, `Header`, `PopNewCard`, `PopBrowse`, and `PopExit` where suitable.
- [ ] Run focused and complete tests, then remove only duplication exposed by the passing tests.
- [ ] Commit the page layer and its tests as one checkpoint.

### Task 3: UI-driven authentication and route-aware board navigation

**Files:**
- Modify: `src/components/Header/Header.jsx`
- Modify: `src/components/Header/Header.styled.js`
- Modify: `src/components/Card/Card.jsx`
- Modify: `src/components/Card/Card.styled.js`
- Modify: `src/components/PopUser/PopUser.jsx`
- Modify: `src/components/PopUser/PopUser.styled.js`
- Modify: `src/components/PopExit/PopExit.jsx`
- Modify: `src/pages/ExitPage/ExitPage.jsx`
- Test: `src/routes/AppRoutes.test.jsx`
- Test: `src/components/Board.test.jsx`

**Interfaces:**
- Consumes: React Router navigation context and `onLogout()`
- Produces: link-based navigation to `/new-card`, `/card/:id`, and `/exit`

- [ ] Add failing integration tests for login, card/new-task navigation without reload, cancel exit, and confirmed logout.
- [ ] Run focused tests and verify failures identify old hash-link behavior or missing auth transitions.
- [ ] Replace hash anchors/location mutation with `Link`, route-aware buttons, and callbacks.
- [ ] Run focused tests and the whole suite; update old board tests only where router context is now a real runtime dependency.
- [ ] Commit the navigation and authentication flow as one checkpoint.

### Task 4: Card parameter behavior and final regression checks

**Files:**
- Modify: `src/pages/CardPage/CardPage.jsx`
- Test: `src/routes/AppRoutes.test.jsx`
- Modify: `README.md`

**Interfaces:**
- Consumes: `useParams<{ id: string }>()`
- Produces: visible text containing the current route ID

- [ ] Add a failing test that navigates from `/card/1` to `/card/2` and expects the displayed ID to change.
- [ ] Run the focused test and verify it fails because the current route ID is missing or stale.
- [ ] Render the current `id` from `useParams` and document the new routes and demo authentication behavior.
- [ ] Run `npm.cmd test` and `npm.cmd run build`; require zero failing tests and a successful production build.
- [ ] Review `git diff` for accidental edits, then commit the completed homework checkpoint if requested.
