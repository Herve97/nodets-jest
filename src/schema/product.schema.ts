import { object, string, TypeOf, number } from "zod";

/**
 * @openapi
 * components:
 *   schema:
 *     Product:
 *       type: object
 *       required:
 *        - title
 *        - description
 *        - price
 *        - image
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         image:
 *           type: string
 */

const payload = {

  body:object({

    title: string({
      required_error: 'Title is required'
    }),

    productId: string({
      required_error: 'ProductId is required'
    }),

    description: string({
      required_error: 'Description is required'
    }),

    price: number({
      required_error: 'Price is required'
    }),

    image: string({
      required_error: 'Image is required'
    })

  })

};

const params ={
  params: object({
    productId: string({
      required_error: "productId is required"
    })
  })
}

export const createProductSchema = object({
  ...payload
});

export const updateProductSchema = object({
  ...payload,
  ...params
});

export const deleteProductSchema = object({
  ...params
});

export const getProductSchema = object({
  ...params
});

export type createProductInput = TypeOf<typeof createProductSchema>
export type updateProductInput = TypeOf<typeof updateProductSchema>
export type getProductInput = TypeOf<typeof getProductSchema>
export type deleteProductInput = TypeOf<typeof deleteProductSchema>

