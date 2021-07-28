<h1>Nexand</h1>
A plug and chug project built with nextjs and AntDesign.<br><br>

## Features
* Theme is fully customizable and it support both light and dark color modes.<br>
* Both color modes can be dynamically changed without restarting the developement server.<br>

## Dependencies
* next-with-less (optional)
* react-css-theme-switcher (required)

## Setting up the project
Just clone the repo and run 
```bash
yarn install
```
to install all dependencies for the project.

Run the development server with
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing the theme
There are two ways of customizing the theme
1) DURING DEVELOPMENT
    To see changes without restarting the server open `styles/themes/dark-theme.less` and customize it according to your needs.
    You should see your changes live.
    Same goes for `light-theme.less` but just before doing it, stop the development server. Go to `next.config.js` and at line 3, change
    
    ```
    const pathToLessFileVariables = path.resolve("./styles/themes/dark-theme.less");
    ```
    
    to
    
    ```
    const pathToLessFileVariables = path.resolve("./styles/themes/light-theme.less");
    ```
    and then make changes to your `light-theme.less`.
    
 2) After making all of your changes run

    ```bash
    npx gulp less
    ```
    This will create css for both of your themes.
    
 ### And thats it, you should now have an up and running NextJs project with two color themes and Antd React setup.
