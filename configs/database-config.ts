export interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: string;
  logging: boolean | Function;
  force: boolean;
  timezone: string;
}

export const databaseConfig: DatabaseConfig = {
  username: "travis",
  password: "",
  database: "sequelize_typescript_examples",
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  logging: true,
  force: true,
  timezone: "+00:00"
};
