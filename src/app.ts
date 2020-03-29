import 'reflect-metadata';
import './config/env';

import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';

class App {
  public express: Application;

  constructor() {
    this.express = express();
  }

  async boot() {
    await createConnection();

    this.beforeMiddlewares();
    await this.routes();
    this.afterMiddlewares();

    return this.express;
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

export default new App().boot();
