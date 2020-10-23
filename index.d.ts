declare module "multihashing-async" {
  export = Multihashing;

  function Multihashing(buf: Uint8Array, alg: string | number, length?: number): Promise<Uint8Array>;
  namespace Multihashing {
      export { multihash };
      export function digest(buf: Uint8Array, alg: string | number, length?: number): Promise<Uint8Array>;
      export function createHash(alg: string | number): Function;
      export const functions: Object;
      export function validate(buf: any, hash: any): Promise<any>;
  }
  const multihash: any;
}
