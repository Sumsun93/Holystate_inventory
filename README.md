## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Alt:V Connection

### Init

`cef.emit("initInventory", content, clothes, weapons, playerName);`

#### Exemple Data format

<details>
  <summary>content / clothes / weapons</summary>
  
  ```javascript
  [
    {
      name: "KRÖTEN 0",
      quantity:200,
      slot: 0,
      id: 0
     },
     {
      name: "KRÖTEN 1",
      quantity: 50,
      slot: 10,
      id: 1
     },
  ]
  ```
</details>

<details>
  <summary>playerName</summary>
  
  `"AYDEN JOHNSON"`
</details>

### TODO

Send Event from CEF to Clientside on move item (`src/inventory/index.js` Line 71)


