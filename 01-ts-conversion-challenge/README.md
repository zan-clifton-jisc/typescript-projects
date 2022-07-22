## 01: Convert JS Files into TS Files and Compile

This is a challenge activity from _TypeScript Essential Training_ by Jess Chadwick.

In order to convert the files from JS to TS, it was necessary to create a `.tsconfig` file:

```
{
  "include": ["ts-files/**/*"], // sets compiler to include all files in `ts-files`
  "compilerOptions": {
    "target": "ES6",
    "outDir": "compiled-js-files", // sets `compiled-js-files` as folder for new JS files
  }
}
```

And add the following to `package.json` in the root directory of the repo:

```
{
  "type": "module", // tells compiler to use ES6 module imports in this project
}

```

I also needed to export the `formatDate` function from the `utils.ts` file and import it in the app.ts file.

If choosing to run this project locally, please delete `app.js` and `utils.js` from the `compiled-js-files`. Running the TypeScript compiler will recreate these files for you.

Full instructions on creating a local copy of these projects and running them locally can be found in the repo's main [Read Me](https://github.com/zan-clifton-jisc/typescript-projects/blob/main/README.md) file.
