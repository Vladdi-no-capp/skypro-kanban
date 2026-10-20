# Skypro Kanban Vite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current React Router scaffold and supplied static Kanban markup into a working plain Vite React application with the required component structure.

**Architecture:** A root `App` composes static popup, header, and board components. `Main` owns static board data, `Column` maps task data to `Card`, and both task dialogs reuse `Calendar`; the supplied BEM classes, CSS, and public images remain the visual contract.

**Tech Stack:** React 19, JavaScript/JSX, Vite, Vitest, Testing Library, CSS

**Spec:** `docs/superpowers/specs/2026-10-20-kanban-vite-design.md`

## Global Constraints

- Use a plain Vite React JavaScript project, not the React Router framework or TypeScript.
- Preserve the supplied BEM class names, Russian copy, `src/App.css`, and `public/images` assets.
- Keep `src/index.css` empty as required by the homework.
- Create a separate folder and same-cased `.jsx` file for every required component.
- Required components are `Main`, `Header`, `Column`, `Card`, `Calendar`, `PopBrowse`, `PopNewCard`, and `PopUser`; retain `PopExit` as an additional component.
- Render repeated columns and cards from static arrays; do not add APIs, routing, persistence, authentication, or drag-and-drop.
- Link Roboto weights 400, 500, 600, and 700 from Google Fonts in root `index.html`.

## Review Focus

- Raw HTML syntax must not survive in JSX: tests must render the full application without a compile exception or invalid-property warnings.
- Every required component folder and matching filename must exist with the exact requested capitalization.
- Five Kanban columns must render in their original order, including columns with multiple cards.
- Both logo variants must resolve from `/images`, and CSS must preserve responsive rules without changed BEM selectors.
- Reused `Calendar` markup must render in both task dialogs without duplicate SVG IDs that break visible icons.

---

### Task 1: Replace the framework scaffold with a plain Vite React shell

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/index.css`
- Create: `src/App.css` from `app/app.css`
- Remove after migration: `app/`, `.react-router/`, `.agents/`, `react-router.config.ts`, `tsconfig.json`, `vite.config.ts`, `Dockerfile`
- Regenerate: `package-lock.json`

**Interfaces:**
- Consumes: supplied markup in `app/app.jsx`, styles in `app/app.css`, and assets in `public/images`
- Produces: Vite entry point `src/main.jsx`, root component `App()`, and test/build scripts used by all later tasks

- [ ] **Step 1: Record the current failing build**

Run: `npm run build`
Expected: FAIL because the React Router scaffold references incomplete generated files and the raw markup is not wired into a route.

- [ ] **Step 2: Define the plain Vite package contract**

Set scripts to `dev: vite`, `build: vite build`, `preview: vite preview`, and `test: vitest run`. Keep `react` and `react-dom`; replace React Router/Tailwind dependencies with `vite`, `@vitejs/plugin-react`, `vitest`, `jsdom`, and `@testing-library/react` in the appropriate dependency sections.

- [ ] **Step 3: Create the Vite entry shell and preserve source assets**

Create root `index.html` with `#root`, `/src/main.jsx`, Roboto links, and Russian language metadata. Create `vite.config.js` with the React plugin, `src/main.jsx` with `createRoot`, a temporary valid `App`, an empty `src/index.css`, and copy the supplied stylesheet verbatim to `src/App.css`.

- [ ] **Step 4: Install the new dependency graph**

Run: `npm install`
Expected: exit 0 and a regenerated lockfile without React Router packages as direct dependencies.

- [ ] **Step 5: Verify the shell and remove obsolete framework files**

Run: `npm run build`
Expected: PASS and create `dist/index.html`; then remove only the obsolete files listed in this task after confirming `src/App.css` and `public/images` exist.

- [ ] **Step 6: Commit the plain Vite foundation**

```bash
git add .gitignore index.html package.json package-lock.json vite.config.js src public
git add -u
git commit -m "chore: convert project to vite react"
```

### Task 2: Build and test the Kanban board component tree

**Files:**
- Create: `src/components/Card/Card.jsx`
- Create: `src/components/Column/Column.jsx`
- Create: `src/components/Main/Main.jsx`
- Create: `src/components/Header/Header.jsx`
- Create: `src/components/PopUser/PopUser.jsx`
- Create: `src/components/Board.test.jsx`

**Interfaces:**
- Consumes: `App()` shell and supplied BEM markup
- Produces: `Card({ task })`, `Column({ title, tasks })`, `Main()`, `Header()`, and `PopUser()`

- [ ] **Step 1: Write the failing board test**

Render `Main` and assert the ordered headings `Без статуса`, `Нужно сделать`, `В работе`, `Тестирование`, and `Готово`; assert that task titles and dates render. Render `Header` and assert both logo image paths plus the new-task and account controls.

- [ ] **Step 2: Run the board test to verify it fails**

Run: `npm test -- src/components/Board.test.jsx`
Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement `Card({ task })` and `Column({ title, tasks })`**

Preserve the original card BEM structure and calendar icon. Give SVG definitions unique IDs derived from task IDs so repeated cards do not duplicate `clipPath` IDs.

- [ ] **Step 4: Implement `Main()`, `Header()`, and `PopUser()`**

Define the five-column static dataset in `Main.jsx`, map it through `Column`, and convert only the matching supplied header/user markup to valid JSX. Use `/images/logo.png` and `/images/logo_dark.png`.

- [ ] **Step 5: Run the board test**

Run: `npm test -- src/components/Board.test.jsx`
Expected: PASS with all five ordered columns, task content, logo variants, and controls present.

- [ ] **Step 6: Commit the board components**

```bash
git add src/components/Card src/components/Column src/components/Main src/components/Header src/components/PopUser src/components/Board.test.jsx
git commit -m "feat: add kanban board components"
```

### Task 3: Build and test shared calendar and popup components

**Files:**
- Create: `src/components/Calendar/Calendar.jsx`
- Create: `src/components/PopBrowse/PopBrowse.jsx`
- Create: `src/components/PopNewCard/PopNewCard.jsx`
- Create: `src/components/PopExit/PopExit.jsx`
- Create: `src/components/Popups.test.jsx`

**Interfaces:**
- Consumes: supplied popup markup and BEM classes
- Produces: `Calendar({ selectedDay, inputId })`, `PopBrowse()`, `PopNewCard()`, and `PopExit()`

- [ ] **Step 1: Write the failing popup test**

Render all popup components and assert the texts `Создание задачи`, `Название задачи`, `Выйти из аккаунта?`, and two calendars. Assert that form labels are connected to inputs and that readonly/autofocus behavior uses React properties.

- [ ] **Step 2: Run the popup test to verify it fails**

Run: `npm test -- src/components/Popups.test.jsx`
Expected: FAIL because the popup components do not exist.

- [ ] **Step 3: Implement `Calendar({ selectedDay, inputId })`**

Convert the shared September 2023 calendar markup to valid JSX. Use `selectedDay` for the active date and `inputId` to keep reused hidden inputs uniquely identifiable.

- [ ] **Step 4: Implement the three popup components**

Move the matching markup from `app/app.jsx`, reuse `Calendar` in browse/new-card popups, convert labels and boolean attributes, and preserve popup IDs and BEM classes.

- [ ] **Step 5: Run the popup test**

Run: `npm test -- src/components/Popups.test.jsx`
Expected: PASS with valid labels, two calendar instances, and all popup copy present.

- [ ] **Step 6: Commit the popup components**

```bash
git add src/components/Calendar src/components/PopBrowse src/components/PopNewCard src/components/PopExit src/components/Popups.test.jsx
git commit -m "feat: add kanban popup components"
```

### Task 4: Compose the application and verify the homework

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/App.css` only if asset paths require correction
- Create: `src/App.test.jsx`
- Modify: `README.md`

**Interfaces:**
- Consumes: all components from Tasks 2 and 3
- Produces: final `App()` matching the supplied static page and documented run instructions

- [ ] **Step 1: Write the failing integration test**

Render `App` and assert the wrapper, header, five columns, required popups, both image paths, and required Russian headings. Spy on `console.error` and fail on React invalid-property or missing-key warnings.

- [ ] **Step 2: Run the integration test to verify it fails**

Run: `npm test -- src/App.test.jsx`
Expected: FAIL because `App` does not yet compose the complete page.

- [ ] **Step 3: Compose `App()` and finish JSX conversion**

Import `App.css`; render `PopExit`, `PopNewCard`, `PopBrowse`, `Header`, and `Main` inside the single `.wrapper`. Ensure no `<body>`, HTML comments, `class=`, `for=`, kebab-case SVG properties, or unclosed void tags remain under `src`.

- [ ] **Step 4: Document local commands**

Update `README.md` with `npm install`, `npm run dev`, `npm test`, and `npm run build`; remove React Router-specific documentation.

- [ ] **Step 5: Run automated verification**

Run: `npm test`
Expected: PASS for board, popup, and full-app tests.

Run: `npm run build`
Expected: PASS and generate the production bundle in `dist`.

- [ ] **Step 6: Run source-level homework checks**

Confirm `src/index.css` is empty, every required component folder/file exists, `/images` references resolve, and searches for raw HTML attributes/comments in `.jsx` files return no matches.

- [ ] **Step 7: Run browser verification**

Start `npm run dev -- --host 127.0.0.1`, open the page, and check wide and narrow layouts for CSS, logos, five columns, cards, overflow, and popup markup. Confirm there are no console compilation errors.

- [ ] **Step 8: Commit the verified application**

```bash
git add src index.html README.md package.json package-lock.json vite.config.js public .gitignore
git commit -m "feat: build static kanban interface"
```
