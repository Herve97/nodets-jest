import { TypeOf } from "zod";
export declare const createUserSchema: import("zod").ZodObject<{
    body: import("zod").ZodEffects<import("zod").ZodObject<{
        name: import("zod").ZodString;
        password: import("zod").ZodString;
        passwordConfirmation: import("zod").ZodString;
        email: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    }, {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    }>, {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    }, {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    body: {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    };
}, {
    body: {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
    };
}>;
export declare type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;
