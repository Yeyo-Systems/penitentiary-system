# <center> $\textcolor{orange}{\textrm{Penitentiary System}}$ </center>

Application for San Pablo penitentiary

## $\textcolor{yellow}{\textrm{Config application}}$

This section includes all the steps required to configure and run the application.

### $\textcolor{lightblue}{\textrm{Install Yarn}}$

Use the following terminal command to install Yarn as a library manager.

```bash
npm install -g yarn
```

### $\textcolor{lightblue}{\textrm{Install React}}$

Use the following terminal command to create a VITE + React app

```bash
yarn add -D vite
yarn create vite penitentiary-system
```

$\textcolor{purple}{Alternative: Include Redux for RTK Query}$

```bash
yarn add @reduxjs/toolkit react-redux
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

After completing all the configuration steps in VITE, open the folder

```bash
cd penitentiary-system
```

If you are cloning the repository, it is very important to execute the following command.

```bash
yarn install
```

To test the installation, use the following command. If everything is set up correctly, the application should work as expected.

```bash
yarn dev
```

### $\textcolor{lightblue}{\textrm{Install Prettier and ESLint}}$

Install Prettier and ESLint. For more information about Prettier options, visit [Prettier Documentation](https://prettier.io/docs/en/options).

#### $\textcolor{lightgreen}{\textrm{Prettier}}$

Adding prettier using the following command.

```bash
yarn add --dev --exact prettier
```

```json
// .prettierrc

{
  "printWidth": 120,
  "singleQuote": true
}
```

#### $\textcolor{lightgreen}{\textrm{ESLint}}$

Adding ESLint with the following command.

```bash
yarn add --dev eslint-config-prettier
```

```typescript
// .eslintrc.cjs

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
```

After adding the following configuration in package.json

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    ...
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,md}
    \""
    ...
  },
```

Apply the configurations of Prettier and ESLint by running the following command.

```bash
yarn format
```

### $\textcolor{lightblue}{\textrm{Install libraries}}$

#### $\textcolor{lightgreen}{\textrm{React Redux Toolkit y RTK Query}}$

Adding `React Redux Toolkit y RTK Query` with followong command. Documentation in [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

```bash
yarn add @reduxjs/toolkit react-redux
```

#### $\textcolor{lightgreen}{\textrm{ReduxPersist}}$

Adding `Redux Persist` with command. Documentation in [https://www.npmjs.com/package/redux-persist](https://www.npmjs.com/package/redux-persist)

#### $\textcolor{lightgreen}{\textrm{SASS}}$

Support for `SASS` with the following command.

```bash
yarn add sass
```

#### $\textcolor{lightgreen}{\textrm{Material UI}}$

Install `Material UI` using the following command. For more reference and documentation [https://mui.com/material-ui/getting-started/](https://mui.com/material-ui/getting-started/)

```bash
yarn add @mui/material @emotion/react @emotion/styled @fontsource/roboto
```

After adding the imports in the code just before `index.scss`

```typescript
// main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### $\textcolor{lightgreen}{\textrm{Material Icon}}$

Adding `Material Icon` following the next command. For more information open [https://fonts.google.com/icons?icon.set=Material+Icons](https://fonts.google.com/icons?icon.set=Material+Icons)

```bash
yarn add @mui/icons-material
```

#### $\textcolor{lightgreen}{\textrm{Sweetalert2}}$

As alternative is possible to use `Sweetalert2`adding with the following command. Here is possible to read the documentation [https://sweetalert2.github.io/](https://sweetalert2.github.io/)

```bash
yarn add sweetalert2
```

### $\textcolor{lightblue}{\textrm{Hardcoded tools}}$

#### $\textcolor{lightgreen}{\textrm{JsonPlaceholder API}}$

Fake `JsonPlaceholder API` to simulate the consumption of users: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users).

#### $\textcolor{lightgreen}{\textrm{Loader}}$

A cool `Loader` to see the use of RTK Query's isLoading, here we have something for everyone and, converted to a React component in a very simple way with the help of Material UI (see the code in the repository at the end of the article in components > loader): [https://css-loaders.com/](https://css-loaders.com/).

#### $\textcolor{lightgreen}{\textrm{DiceBear}}$

`DiceBear` fake API for generating avatars for fictitious users and displaying them in a more “elaborate” way in Material UI cards (this API is very cool): [https://www.dicebear.com/how-to-use/http-api/](https://www.dicebear.com/how-to-use/http-api/).

## $\textcolor{yellow}{\textrm{License}}$

[MIT](https://choosealicense.com/licenses/mit/)
