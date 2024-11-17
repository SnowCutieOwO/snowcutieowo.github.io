import type { ExpiringStorage as ExpiringStorageInterface } from "./types";
declare class ExpiringStorage implements ExpiringStorageInterface {
    get(key: string): string | null;
    set(key: string, value: string, lifeTimeInMinutes: number): void;
}
declare const _default: ExpiringStorage;
export default _default;
