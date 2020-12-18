# Contributing

Clone the development branch:

    git clone https://github.com/Asha20/reddit-code-highlight -b develop --single-branch

Install the packages:

    npm install

After that:

- Use the `build` script to build the extension for production.
- Use the `watch` script to rebuild the extension on change.
- The `prettier` and `lint` scripts will run automatically on commit. Do *not* create commits that ignore these checks.

Build files will be created in the `dist` directory.

Note: It is recommended to use [`web-ext`](https://www.npmjs.com/package/web-ext) to run and test the extension. To do so, navigate to `dist` and then use `web-ext`:

    cd dist
    # For Mozilla Firefox
    web-ext run
    # For Google Chrome
    web-ext run --target chromium

Branch your PR branch off of `develop` and make your modifications there:

    git checkout -b pr/my-feature

Use the `pr/` prefix when making PRs.