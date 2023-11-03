type setOptions = Record<string, any> & {
    user_data: any
};
export declare function set(action: string, { user_data }?: setOptions): void;
export {};