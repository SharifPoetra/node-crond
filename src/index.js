const path = require("path");
const fs = require("fs");

class CronD {
  constructor(opt = {}) {
    // check the options given
    if (!opt.dir || typeof opt.dir !== "string") throw new Error("Missing `dir` options or the options given is not a string");
    if (!opt.timeInMs || typeof opt.timeInMs !== "number") throw new Error("Missing `timeInMs` options or the options given is not a number");
    // initialize
    this.directory = opt.dir;
    this.timeInMs = opt.timeInMs;
    this.debug = opt.debug;
    this.interval = null;
  }

  init() {
    this.interval = setInterval(() => {
      
      // reassign variables
      const directory = this.directory;
      const time = this.timeInMs;
      const debug = Boolean(this.debug);
      
      fs.readdir(directory, (err, files) => {
        if (err) throw err;
        
        for (const file of files) {
          fs.stat(path.join(directory, file), function(err, stats) {
            const dateCreated = new Date(
              Date.parse(stats.birthtime) + time
            );
            if (new Date().getTime() >= Date.parse(dateCreated)) {
              if (debug === true) {
                console.log("Deleted: " + path.join(directory, file));
              }
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });
        }
      });
    }, 5000);
  }
  
  cancel() {
    if (this.interval === null) throw new Error("There's no running task");
    else clearInterval(this.interval)
  }
  
}

module.exports = CronD;
