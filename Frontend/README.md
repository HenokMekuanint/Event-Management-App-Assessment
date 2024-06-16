# Task Management Application

This is a task management application built with Next.js, TypeScript, Tailwind CSS, and Mobx State Tree. It allows users to create, view, update, and delete tasks. The application utilizes local storage for data persistence.

## Features

- View a list of tasks
- Add a new task
- Edit an existing task
- Delete a task

## Technologies Used

- Next.js: A React framework for building server-side rendered applications.
- TypeScript: A statically-typed superset of JavaScript that improves code maintainability and reliability.
- Tailwind CSS: A utility-first CSS framework for styling and layout.
- Mobx State Tree (MST): A state management library for predictable state management.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management-app
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

4. Run the development server:

   ```bash
   yarn run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application.

## Folder Structure

The project's folder structure is as follows:

```bash
- src
  -app
    - favicon.ico
    - layout.tsx
    - page.tsx
  - components
    - ui
    - AddTask.tsx
    - EditTask.tsx
    - Task.tsx
    - TaskFilter.tsx
    - TaskList.tsx
    ..
  - lib
    - utils.ts
  - stores
    - StroreProvider.tsx
    - TaskStore.ts
  - styles
    - globals.css
```

## Persistence

The application persists task data using local storage. Tasks are stored under the key "taskStore" as a JSON string.

## License

This project is licensed under the [MIT License](LICENSE).

---

Please let me know if you need any further information or assistance.
