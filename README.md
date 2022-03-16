# MMU John Dalton Map

A web application for finding the path and distance between two points in John Dalton.

# Using this repository

- We'll be using Javascript, and I think [VS Code](https://code.visualstudio.com) is the best editor for that.
- You'll need to install Git.
- You can use the VSCode Git sidebar item to do all your git stuff. Use that to clone this respository.
- You'll need [Node JS](https://nodejs.org/en/).
- Using VSCode, you can hit Ctrl+J to open a terminal. With that terminal open, you can type `cd frontend` to move into the frontend folder.
- Use `npm install` to install the web server and stuff.
- Use `npm run dev` to run a development server. 


# Committing changes back

You can use vscode to do all of this instead of using the command line.

- Make a new branch, name it after your name and what you're doing (i.e. `kiam/add-floor-3`).
- Add your changes to the branch and commit them.
- Push the branch back to the repository.
- Make a pull request.
- Should be all good!

# Technology Stack

No idea yet. I don't think we'll need a backend, since the entire map can be loaded locally. We'll
only need a server to actually serve the initial bit of info.

I'm fond of [Svelte](https://svelte.dev) for web stuff, so we'll probably go with that.

We'll be treating this as a graph theory problem with weighted nodes, and using dijkstras or something else
to draw a path between two points.
