# Deno Workspace

Welcome to the Deno Workspace project! This repository is dedicated to exploring the capabilities and limitations of using Deno in a monorepo setup.

Running `deno task dev` will launch a Vite React project by leveraging the Deno 2.1 `--filter` feature. However, some modifications from the developer documentation were necessary to get it working properly.

## Limitations

### Limitation \#1

The `--filter` flag does not work as expected. According to the documentation, the filter should take a path to the directory for the project. This does not work. However, adding a "name" property to the `deno.json` config for the Vite project and using that as the filter does work.

### Limitation \#2

Packages within the monorepo cannot be imported into the Vite project. This might be because the Vite project runs in a separate process and does not have access to the Deno runtime.
