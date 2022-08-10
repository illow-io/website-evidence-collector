const fs = require("fs-extra");

function init(args, logger) {
  // creating the folder structure - io
  if (args.output) {
    if (fs.existsSync(args.output)) {
      if (fs.readdirSync(args.output).length > 0) {
        if (args.overwrite) {
          fs.emptyDirSync(args.output);
        } else {
          const error = "Error: Output folder or file " + args.output +
            " is not empty. Delete/empty manually or call with --overwrite.";
          logger.error(error);
          throw new Error(error);
        }
      }
    } else {
      fs.mkdirSync(args.output);
    }
  }
}

module.exports = { init };
