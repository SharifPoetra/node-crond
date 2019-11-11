# node-crond

Schedule deleting all file in a directory in X time after their creation.

## Options

- `directory` String - The path to directory
- `timeInMs` Number - The time in miliseconds to delete the file after their time creation
- `debug` Boolean - Log the deleted file to console

## Example usage

```javascript
const CronD = require("crond");

// intialize crond to delete all files in ./path/to/dir directory with 120000ms (2 minutes) after the file creation time
const crond = new CronD({ directory: "./path/to/dir", timeInMs: 120000 });

// start the check (remember that crond already have the interval to check set to 5 seconds so you do not need to do the interval again yourself)
crond.init();

// clear the interval
crond.cancle();
```