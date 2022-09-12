export declare const createSessionSchema: import("zod").ZodObject<{
    body: import("zod").ZodObject<{
        password: import("zod").ZodString;
        email: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    body: {
        email: string;
        password: string;
    };
}, {
    body: {
        email: string;
        password: string;
    };
}>;
