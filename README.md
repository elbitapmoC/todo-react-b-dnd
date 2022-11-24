# A simple Drag-and-Drop Todo App

Features:

- Two views to toggle: Kanban View and Weekly View.
- You can create new task by press enter key after filling the content in the input box.
- You can easily update and delete task by clicking the icon buttons on the right side of each task.
- You can drag and drop task to update their status.

## Tech Stack

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Typescript](https://www.typescriptlang.org/) - A typed JavaScript
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - A React library to create dnd effects.

## Getting Started

- Git clone this repo
- Install all dependencies:

```bash
yarn
# or
yarn install
```

- Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Modes and Environment Variables

Two modes:

- `development` is used by `yarn dev`
- `production` is used by `yarn build`

Environment Variables Load Order
Environment variables are looked up in the following places, in order, stopping once the variable is found.

`process.env`  
`.env.$(NODE_ENV).local`  
`.env.local` (Not checked when NODE_ENV is test.)  
`.env.$(NODE_ENV)`  
`.env`

Learn more: https://nextjs.org/docs/basic-features/environment-variables

# todo-react-b-dnd
