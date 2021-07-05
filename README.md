# Simple mongoDB server

I completed [Web Dev Simplified's tutorial](https://www.youtube.com/watch?v=fgTGADljAeg) and this is the result.

**NOTE:** MongoDB is not included, you must install one locally or have a remote MongoDB.

## Setup

1. Clone this git repository
2. open this folder in terminal and type `npm install` to install the dependencies. **You also need to install `nodemon` globally if you want to run development mode**.
3. create a `.env` file. **PLEASE CONFIGURE `.env` FIRST**. The `.env` configuration is at [here](#env)
4. To run this in development mode, type `npm run dev` in terminal and it will start up the server using `nodemon`. Write and save anything in `src` folder and `nodemon` will restart the server for you.
5. To compile the typescipts into javascript, all you need to type is `tsc` and the typescript compiler will poop the JS into `dist` folder. `dist/server.js` is the entry point.

<h2 id="env">.env Configuration</h2>

| key       | description                                                 |
| --------- | ----------------------------------------------------------- |
| MONGO_URL | The MongoDB url. Default value: `mongodb://127.0.0.1:27017` |
| PORT      | Port that the server listens to. Default value: `3000`      |
