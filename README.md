<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Laravel 10 + REACT js

- Install npm on your project
```sh
npm install 
```
- Install react plugin in laravel 10 @vitejs/plugin-react 
```sh
npm install --save-dev @vitejs/plugin-react
```

- run npm build on your application 
```bash
npm run build
```
- the above command will create the file public/build/manifest.json  
- update the react dom and install latest version
```sh
npm install react@latest react-dom@latest
```
- Whenever you want to make changes on the frontend part of your application start the development server using the below command
```sh
npm run dev
```
- When you close the development server the changes would not reflect to the running laravel website , in order to save the changes on main laravel project you need to run the build again
```sh
npm run build
```

- Now your application will run through laravel 
```sh
php artisan serve
```
- when you start work on development you need to run the development server and when you build your application the changes are saved on laravel and now you don't need to run the developments server you can direactly run your application by serving laravel project.

### Files to must see : 
- vite.config.js
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```
- resources\views\welcome.blade.php
```php
<body>
    <div id="app"></div>
    @viteReactRefresh
    @vite('resources/js/app.js')

</body>
```
- resources\js\app.js
```js
  import './bootstrap';
  import './components/Main.jsx';
```
- resources\js\components\Main.jsx
```jsx
import React from  'react';
import ReactDOM from 'react-dom/client';

export default function Main(){
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<Main/>);
```

- .env
```bash
APP_URL=http://127.0.0.1:8000
```

- [React + Laravel documentation](https://laravel.com/docs/10.x/vite#react)


### Next step's
- whenever you want need development enviournment run the development server and start working
```sh
npm run dev
```
- and when you are happy with your changes and want to apply on the project run the npm build
```sh
npm run build
```