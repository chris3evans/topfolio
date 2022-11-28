declare global {
    namespace Express {
        export interface Request {
            language?: Language;
            user?: User;
            auth: {
                payload: {
                    sub: string
                }
            }
        }
    }
}