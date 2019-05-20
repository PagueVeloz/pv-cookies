### pv-cookies

Giving easy access to browser cookies.
[Visit on NPM](https://www.npmjs.com/package/pv-cookies)

setCookie(name, string) - Allows you to pass a name and a string value to store a cookie on the user's browser. It maps the name to the string.

readCookie(name) - returns the value of your of your cookie.

deleteCookie(name) - removes the cookie from the browser history.


### Installation
|Package Manager|Command|
|-|-|
|Yarn| `yarn add pv-cookies` |
|NPM| `npm install --save pv-cookies` |


### usage

2) Import these methods in es6 like so:
`import { setCookie, readCookie, deleteCookie } from 'pv-cookies'`
