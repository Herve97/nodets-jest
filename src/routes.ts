import {Express, Request, Response} from "express";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "./controller/product.controller";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionHandler, googleoAuthHandler } from "./controller/session.controller";
import { createUserHandler, getCurrentUser } from "./controller/user.controller";
import { requireUser } from "./middleware/requireUser";
import validate from "./middleware/validateRessource";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "./schema/product.schema";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";

function routes (app:Express){

  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */

  app.get('/healthcheck', (req: Request, res: Response)=>{
    res.sendStatus(200);
  });

  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */

  app.post('/api/users', validate(createUserSchema), createUserHandler);
  app.get('/api/me', requireUser,  getCurrentUser);

  app.post('/api/sessions', validate(createSessionSchema), createUserSessionHandler);

  app.get('/api/sessions', requireUser, getUserSessionHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.get('/api/sessions/oauth/google', googleoAuthHandler);

  // ==================== Product route ======================

  app.post('/api/products', [requireUser, validate(createProductSchema)], createProductHandler);
  app.get('/api/products/:productId', validate(getProductSchema), getProductHandler);

  /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */

  app.put('/api/products/:productId', [requireUser, validate(updateProductSchema)], updateProductHandler);
  
  app.delete('/api/products/:productId', [requireUser, validate(deleteProductSchema)], deleteProductHandler);

}

export default routes;