declare module "continuation-local-storage" {
  interface Namespace {
    set(key: any, value: any): any;
    get(key: any): any;
    createContext(): any;
    run(fn: Function): any;
    bind(fn: Function, context: any): Function;
    enter(context: any): void;
    exit(context: any): void;
    bindEmitter(emitter: any): void;
    fromException(exception: void): any;
    name: string;
    active: {[key: string]: any};
    _set: Array<any>;
    id: any;
  }

  export function getNamespace(name: string): Namespace;
  export function createNamespace(name: string): Namespace;
  export function destroyNamespace(name: string): void;
  export function reset(): void;
}
