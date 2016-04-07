import * as cluster from "cluster";
import * as mkdirp from "mkdirp";
import * as path from "path";
import {configs} from "../../../configs/configs";
import {transports, Logger} from "winston";
import {Request, Response} from "express";

let config = configs.getLoggingConfig();
config.file.filename = `${path.join(config.directory, "../sequelize-express/logs")}/${config.file.filename}`;

if (cluster.isMaster) {
  mkdirp.sync(path.join(config.directory, "../sequelize-express/logs"));
}

export const logger = new Logger({
  transports: [
    new transports.File(config.file),
    new transports.Console(config.console)
  ],
  exitOnError: false
});

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};
