# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the App

For developing the app, run `yarn start` and go to [localhost:3000](http://localhost:3000)
If you are loading a chat with more than 50k messages, the nivo library might be a bit slow to render.

Lint errors will show up in the console, sometimes prevent you from loading the app.
If you cannot fix it, or just add `// @ts-ignore` over the line, but do keep this as a last resort

### Other commands

As this project was created with "Create React App", scripts for testing (`yarn test`), bulding (`yarn build`)
and ejecting (`yarn eject`).

**Note: Ejecting is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Libraries

### UI - Rebass

This project uses [Rebass](https://rebassjs.org/getting-started) as its UI library, see their pages for how to use and style components.
For now, when picking a componet, import it from `rebass/styled-components` (not just `rebass`)

### Graphs- Nivo

This project uses [Nivo](https://nivo.rocks/components) as its graph library, see their pages for how to use and style and format data.
