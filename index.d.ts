declare module "multihashing-async" {
  // export = Multihashing;

  export type MultihashingAlgos =
    | "identity"
    | "sha1"
    | "sha2-256"
    | "sha2-512"
    | "sha3-512"
    | "sha3-384"
    | "sha3-256"
    | "keccak-224"
    | "keccak-256"
    | "keccak-384"
    | "keccak-512"
    | "murmur3-128"
    | "murmur3-32"
    | "dbl-sha2-256"

  type AsyncHash = (buf: Uint8Array) => Promise<Uint8Array>
  function Multihashing(buf: Uint8Array, alg: MultihashingAlgos, length?: number): Promise<Uint8Array>;
  namespace Multihashing {
      export { multihash };
      export function digest(buf: Uint8Array, alg: MultihashingAlgos, length?: number): Promise<Uint8Array>;
      export function createHash(alg: MultihashingAlgos): AsyncHash;
      export const functions: Object;
      export function validate(buf: any, hash: any): Promise<any>;
  }
  const multihash: any;
}
