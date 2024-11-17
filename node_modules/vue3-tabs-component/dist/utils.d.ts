import { InjectionKey } from "vue";
export declare function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T & ({} | null);
