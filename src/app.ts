import 'reflect-metadata';

import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.boot();
  }

  async boot() {
    await createConnection();

    this.beforeMiddlewares();
    this.routes();
    this.afterMiddlewares();
  }

  beforeMiddlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());
  }

  afterMiddlewares() { } // tslint:disable-line

  async routes() {
    const routes = await import('./routes');

    this.express.use(routes.default);
  }
}

export default new App().express;
