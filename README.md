# Deno Workspace Exploration

Exploring the capabilities and limitations of using Deno in a monorepo setup.

Running `deno task dev` will launch a Vite React project by leveraging the Deno 2.1 `--filter` feature. However, some modifications from the developer documentation were necessary to get it working properly.

## Limitations

### Limitation \#1

The `--filter` flag does not work as expected. According to the documentation, the filter should take a path to the directory for the project. This does not work. However, adding a "name" property to the `deno.json` config for the Vite project and using that as the filter does work.

### Limitation \#2

Packages within the monorepo cannot be imported into the Vite project. This is related to this Github issue: <https://github.com/denoland/deno/issues/26721>. However, the workaround is to do something similar to what is in this issue: <https://github.com/denoland/deno-vite-plugin/issues/19>.
