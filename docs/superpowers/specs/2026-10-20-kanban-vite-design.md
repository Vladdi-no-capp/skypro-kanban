# Skypro Kanban Vite Design

## Goal

Bring the current homework project into compliance with the assignment: a plain Vite React application that reproduces the provided static Kanban layout, uses the supplied CSS and images, and splits the page into the required React components.

## Current State

- The project was scaffolded with the React Router framework instead of the plain Vite React template.
- The supplied `main.html` body has been copied into `app/app.jsx` as raw HTML.
- The supplied `main.css` styles have been copied into `app/app.css`.
- Logo images are present in `public/images`.
- The raw markup still contains HTML-only syntax that is invalid in JSX.
- No local Git repository or component structure exists yet.

## Project Structure

The React Router scaffold will be converted in place into a plain JavaScript Vite React project. The application source will live under `src`:

```text
src/
  components/
    Calendar/Calendar.jsx
    Card/Card.jsx
    Column/Column.jsx
    Header/Header.jsx
    Main/Main.jsx
    PopBrowse/PopBrowse.jsx
    PopExit/PopExit.jsx
    PopNewCard/PopNewCard.jsx
    PopUser/PopUser.jsx
  App.css
  App.jsx
  index.css
  main.jsx
```

The root `index.html` will contain Vite's mount element and the Google Fonts connection. Images will remain under `public/images` and be referenced with root-relative URLs such as `/images/logo.png`.

## Component Responsibilities

- `App` imports global application styles and composes the page-level popups, header, and main board.
- `Header` renders both logo variants, the new-task action, and user controls.
- `Main` owns the static column and task data and renders the Kanban board.
- `Column` renders one status column and delegates individual tasks to `Card`.
- `Card` renders a task category, title, menu affordance, and due date.
- `Calendar` renders the shared static calendar used by task dialogs.
- `PopBrowse` renders the task-view dialog and reuses `Calendar`.
- `PopNewCard` renders the task-creation dialog and reuses `Calendar`.
- `PopUser` renders the account menu.
- `PopExit` preserves the supplied exit-confirmation dialog as an additional component.

The homework is static at this stage. No routing, state library, API access, or new interactive behavior will be introduced.

## JSX Conversion

The raw HTML will be converted without redesigning the supplied layout:

- Remove the nested `body` element from `App`.
- Convert HTML comments to JSX comments.
- Rename `class` to `className` and `for` to `htmlFor`.
- Convert React DOM attributes such as `autofocus`, `readonly`, `clip-path`, `stroke-width`, `stroke-linecap`, and `stroke-linejoin` to their JSX forms.
- Self-close void elements such as `input` and `img`.
- Keep the existing BEM class names so the supplied CSS continues to apply.
- Avoid invalid nested interactive elements where doing so does not change the supplied visual structure.

## Data Flow

`Main` will define a small static array of columns. Each column contains its title and task array. `Main` maps columns to `Column`; `Column` maps tasks to `Card`. Props will remain minimal and use JavaScript rather than TypeScript because the homework explicitly names `.jsx` files and asks for a Vite React template.

## Styling and Fonts

The supplied stylesheet will become `src/App.css` without visual restyling. `src/index.css` will remain empty as required. The stylesheet declares Roboto, so Roboto weights 400, 500, 600, and 700 will be linked from Google Fonts in the root `index.html`.

## Verification

Completion requires:

- all required component folders and matching `.jsx` filenames;
- successful dependency installation;
- successful `npm run build`;
- successful `npm run dev` startup;
- a browser check that the page renders with styles, images, columns, cards, and popup markup intact;
- no JSX compilation errors or obvious browser console errors;
- a final Git commit after verification.

## Scope Boundaries

- Creating or connecting the remote GitHub repository is separate from converting and verifying the local project, though the local repository will be initialized and committed.
- Popup opening/closing logic, authentication, task creation, persistence, and drag-and-drop are outside this homework step.
- The supplied visual design and BEM naming will not be replaced with a new design system.
