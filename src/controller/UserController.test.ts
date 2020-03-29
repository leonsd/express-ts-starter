import { Application } from 'express';
import request from 'supertest';
import App from '../app';

describe('UserController', () => {
  let app: Application;

  beforeAll(async () => {
    app = await App;
  });

  it('should list users and respond with status 200', async (done) => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
    // expect(response.body[0]).toHaveProperty('email');
    // expect(response.body[0]).toHaveProperty('createdAt');
    // expect(response.body[0]).toHaveProperty('updatedAt');
    done();
  });

  it('should register user and respond with status 201', async (done) => {
    const response = await request(app).post('/users').send({
      email: 'leon.sdsilva1@gmail.com',
      password: '123456'
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('updatedAt');
    done();
  });
});
