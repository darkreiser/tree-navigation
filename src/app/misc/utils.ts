export class Utils {
    static clone<T> (obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    };

    static generateId(): string {
        return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    };
}