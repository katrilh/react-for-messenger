# This App was made with Flask and Create React App

## Running the Backend

Starting the virtual environment (venv)

```cmd
$ cd flask-server
$ venv\Scripts\activate @rem windows spesific
$ (venv) flask run
```

In `flask-server/`, if `.env` does not exsist, create it with the followin content

```cmd
FLASK_APP=main.py
FLASK_ENV=development
```

**Remember** to check that you have the packages in `flask-server/requirements.txt`

```cmd
$ (venv) pip3 list
```
If you are missing something run 
```
$ (venv) pip3 install -r requirements.txt
```

## Running the Frontend

```cmd
$ cd react-app
$ yarn start
```

The app will run on [localhost:3000](http://localhost:3000)

If you are loading a chat with more than 50k messages, the nivo library might be a bit slow to render.

Lint errors will show up in the console, sometimes prevent you from loading the app.
If you cannot fix it, or just add `// @ts-ignore` over the line, but do keep this as a last resort

### Other commands

As this project was created with "Create React App", scripts for testing (`yarn test`), bulding (`yarn build`)
and ejecting (`yarn eject`).

## Libraries

### UI - Rebass

This project uses [Rebass](https://rebassjs.org/getting-started) as its UI library, see their pages for how to use and style components.
For now, when picking a componet, import it from `rebass/styled-components` (not just `rebass`)

### Graphs- Nivo

This project uses [Nivo](https://nivo.rocks/components) as its graph library, see their pages for how to use and style and format data.

# Roadmap
Well, its not so much a roadmap as things I would like to add to the repo 
* I want to move more of the data formatting to python, and support some “durable” cashing 
* I want to be able to generate fake data so that one can play with eh visualizations without real-life data

