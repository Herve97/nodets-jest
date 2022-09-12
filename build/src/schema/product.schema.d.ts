import { TypeOf } from "zod";
export declare const createProductSchema: import("zod").ZodObject<{
    body: import("zod").ZodObject<{
        title: import("zod").ZodString;
        productId: import("zod").ZodString;
        description: import("zod").ZodString;
        price: import("zod").ZodNumber;
        image: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    }, {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    body: {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    };
}, {
    body: {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    };
}>;
export declare const updateProductSchema: import("zod").ZodObject<{
    params: import("zod").ZodObject<{
        productId: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        productId: string;
    }, {
        productId: string;
    }>;
    body: import("zod").ZodObject<{
        title: import("zod").ZodString;
        productId: import("zod").ZodString;
        description: import("zod").ZodString;
        price: import("zod").ZodNumber;
        image: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    }, {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    params: {
        productId: string;
    };
    body: {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    };
}, {
    params: {
        productId: string;
    };
    body: {
        title: string;
        productId: string;
        description: string;
        price: number;
        image: string;
    };
}>;
export declare const deleteProductSchema: import("zod").ZodObject<{
    params: import("zod").ZodObject<{
        productId: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        productId: string;
    }, {
        productId: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    params: {
        productId: string;
    };
}, {
    params: {
        productId: string;
    };
}>;
export declare const getProductSchema: import("zod").ZodObject<{
    params: import("zod").ZodObject<{
        productId: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        productId: string;
    }, {
        productId: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    params: {
        productId: string;
    };
}, {
    params: {
        productId: string;
    };
}>;
export declare type createProductInput = TypeOf<typeof createProductSchema>;
export declare type updateProductInput = TypeOf<typeof updateProductSchema>;
export declare type getProductInput = TypeOf<typeof getProductSchema>;
export declare type deleteProductInput = TypeOf<typeof deleteProductSchema>;
