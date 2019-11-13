<h1 align="center">node-crond</h1>  
<p align="center">Schedule deleting all file in a directory in X time after their creation.</p>
<p align="center">
  <a href="https://discord.gg/ZEFrfj5"><img src="https://discordapp.com/api/guilds/582372920047829014/embed.png" alt="discord-server" /></a>
  <a href="https://www.npmjs.com/package/node-crond"><img src="https://img.shields.io/npm/v/node-crond.svg" alt="npm-version" /></a>
  <a href="https://www.npmjs.com/package/node-crond"><img src="https://img.shields.io/npm/dt/node-crond.svg" alt="npm-downloads" /></a>
  <a href="https://david-dm.org/SharifPoetra/node-crond"><img src="https://img.shields.io/david/SharifPoetra/node-crond.svg" alt="npm-dependencies" /></a>
  <a href="#"><img src="https://img.shields.io/github/repo-size/SharifPoetra/node-crond.svg" alt="GitHub repo size" ></a>
  <a href='https://github.com/SharifPoetra/node-crond/blob/master/package.json'><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/SharifPoetra/node-crond.svg"></a>
</p>  

## Installation
```bash
npm install node-crond --save
```

## Options

- `dir` String - The path to directory
- `timeInMs` Number - The time in miliseconds to delete the file after their time creation
- `debug` Boolean - Log the deleted file to console

## Example usage

```javascript
const CronD = require("node-crond");

// intialize crond to delete all files in ./path/to/dir directory with 120000ms (2 minutes) after the file creation time
const crond = new CronD({ dir: "./path/to/dir", timeInMs: 120000 });

// start the check (remember that crond already have the interval to check set to 5 seconds so you do not need to do the interval again yourself)
crond.init();

// clear the interval
crond.cancel();
```