import * as path from "path";

export interface LoggingConfig {
  file: {
    level: string,
    filename: string,
    handleExceptions: boolean,
    json: boolean,
    maxsize: number,
    maxFiles: number,
    colorize: boolean
  };
  console: {
    level: string,
    handleExceptions: boolean,
    json: boolean,
    colorize: boolean
  };
  directory: string;
}

export const loggingConfig: LoggingConfig = {
  file: {
    level: "info",
    filename: "sequelize-typescript-example.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 100,
    colorize: false
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: false,
    colorize: true
  },
  directory: path.join(__dirname)
};
