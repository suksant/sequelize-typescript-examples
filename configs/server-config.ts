export interface ServerConfig {
  port: number;
  session: {
    secret: string,
    name: string,
    resave: boolean,
    saveUninitialized: boolean,
    proxy: boolean
  };
}

export const serverConfig: ServerConfig = {
  port: 3000,
  session: {
    secret: "sequelize-typescript-examples",
    name: "sequelize-typescript-examples",
    resave: false,
    saveUninitialized: false,
    proxy: false
  }
};
