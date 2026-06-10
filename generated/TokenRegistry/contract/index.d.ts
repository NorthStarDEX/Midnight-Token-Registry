import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum TokenSurface { unshielded = 0, shielded = 1 }

export type Witnesses<PS> = {
  localSecretKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  registerToken(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array,
                surface_0: TokenSurface,
                metadata_0: { name: Uint8Array,
                              symbol: { is_some: boolean, value: Uint8Array },
                              decimals: { is_some: boolean, value: bigint },
                              description: { is_some: boolean, value: Uint8Array
                                           },
                              image: { is_some: boolean, value: Uint8Array },
                              mediaType: { is_some: boolean, value: Uint8Array },
                              version: bigint
                            }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                      tokenColor_0: Uint8Array,
                      metadata_0: { name: Uint8Array,
                                    symbol: { is_some: boolean,
                                              value: Uint8Array
                                            },
                                    decimals: { is_some: boolean, value: bigint
                                              },
                                    description: { is_some: boolean,
                                                   value: Uint8Array
                                                 },
                                    image: { is_some: boolean, value: Uint8Array
                                           },
                                    mediaType: { is_some: boolean,
                                                 value: Uint8Array
                                               },
                                    version: bigint
                                  }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                     tokenColor_0: Uint8Array,
                     surface_0: TokenSurface): __compactRuntime.CircuitResults<PS, []>;
  setTokenActive(context: __compactRuntime.CircuitContext<PS>,
                 tokenColor_0: Uint8Array,
                 active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  removeToken(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  transferAdmin(context: __compactRuntime.CircuitContext<PS>,
                newAdminKeyHash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  tokenExists(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getToken(context: __compactRuntime.CircuitContext<PS>,
           tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { tokenColor: Uint8Array,
                                                                            surface: TokenSurface,
                                                                            metadata: { name: Uint8Array,
                                                                                        symbol: { is_some: boolean,
                                                                                                  value: Uint8Array
                                                                                                },
                                                                                        decimals: { is_some: boolean,
                                                                                                    value: bigint
                                                                                                  },
                                                                                        description: { is_some: boolean,
                                                                                                       value: Uint8Array
                                                                                                     },
                                                                                        image: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                        mediaType: { is_some: boolean,
                                                                                                     value: Uint8Array
                                                                                                   },
                                                                                        version: bigint
                                                                                      },
                                                                            active: boolean
                                                                          }>;
  getTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                   tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { name: Uint8Array,
                                                                                    symbol: { is_some: boolean,
                                                                                              value: Uint8Array
                                                                                            },
                                                                                    decimals: { is_some: boolean,
                                                                                                value: bigint
                                                                                              },
                                                                                    description: { is_some: boolean,
                                                                                                   value: Uint8Array
                                                                                                 },
                                                                                    image: { is_some: boolean,
                                                                                             value: Uint8Array
                                                                                           },
                                                                                    mediaType: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                    version: bigint
                                                                                  }>;
  getTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                  tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, TokenSurface>;
  isTokenActive(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getCallerKeyHash(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getAdminKeyHash(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getRegistryVersion(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  getProjectName(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, string>;
}

export type ProvableCircuits<PS> = {
  registerToken(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array,
                surface_0: TokenSurface,
                metadata_0: { name: Uint8Array,
                              symbol: { is_some: boolean, value: Uint8Array },
                              decimals: { is_some: boolean, value: bigint },
                              description: { is_some: boolean, value: Uint8Array
                                           },
                              image: { is_some: boolean, value: Uint8Array },
                              mediaType: { is_some: boolean, value: Uint8Array },
                              version: bigint
                            }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                      tokenColor_0: Uint8Array,
                      metadata_0: { name: Uint8Array,
                                    symbol: { is_some: boolean,
                                              value: Uint8Array
                                            },
                                    decimals: { is_some: boolean, value: bigint
                                              },
                                    description: { is_some: boolean,
                                                   value: Uint8Array
                                                 },
                                    image: { is_some: boolean, value: Uint8Array
                                           },
                                    mediaType: { is_some: boolean,
                                                 value: Uint8Array
                                               },
                                    version: bigint
                                  }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                     tokenColor_0: Uint8Array,
                     surface_0: TokenSurface): __compactRuntime.CircuitResults<PS, []>;
  setTokenActive(context: __compactRuntime.CircuitContext<PS>,
                 tokenColor_0: Uint8Array,
                 active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  removeToken(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  transferAdmin(context: __compactRuntime.CircuitContext<PS>,
                newAdminKeyHash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  tokenExists(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getToken(context: __compactRuntime.CircuitContext<PS>,
           tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { tokenColor: Uint8Array,
                                                                            surface: TokenSurface,
                                                                            metadata: { name: Uint8Array,
                                                                                        symbol: { is_some: boolean,
                                                                                                  value: Uint8Array
                                                                                                },
                                                                                        decimals: { is_some: boolean,
                                                                                                    value: bigint
                                                                                                  },
                                                                                        description: { is_some: boolean,
                                                                                                       value: Uint8Array
                                                                                                     },
                                                                                        image: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                        mediaType: { is_some: boolean,
                                                                                                     value: Uint8Array
                                                                                                   },
                                                                                        version: bigint
                                                                                      },
                                                                            active: boolean
                                                                          }>;
  getTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                   tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { name: Uint8Array,
                                                                                    symbol: { is_some: boolean,
                                                                                              value: Uint8Array
                                                                                            },
                                                                                    decimals: { is_some: boolean,
                                                                                                value: bigint
                                                                                              },
                                                                                    description: { is_some: boolean,
                                                                                                   value: Uint8Array
                                                                                                 },
                                                                                    image: { is_some: boolean,
                                                                                             value: Uint8Array
                                                                                           },
                                                                                    mediaType: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                    version: bigint
                                                                                  }>;
  getTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                  tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, TokenSurface>;
  isTokenActive(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getAdminKeyHash(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getRegistryVersion(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  getProjectName(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, string>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  registerToken(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array,
                surface_0: TokenSurface,
                metadata_0: { name: Uint8Array,
                              symbol: { is_some: boolean, value: Uint8Array },
                              decimals: { is_some: boolean, value: bigint },
                              description: { is_some: boolean, value: Uint8Array
                                           },
                              image: { is_some: boolean, value: Uint8Array },
                              mediaType: { is_some: boolean, value: Uint8Array },
                              version: bigint
                            }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                      tokenColor_0: Uint8Array,
                      metadata_0: { name: Uint8Array,
                                    symbol: { is_some: boolean,
                                              value: Uint8Array
                                            },
                                    decimals: { is_some: boolean, value: bigint
                                              },
                                    description: { is_some: boolean,
                                                   value: Uint8Array
                                                 },
                                    image: { is_some: boolean, value: Uint8Array
                                           },
                                    mediaType: { is_some: boolean,
                                                 value: Uint8Array
                                               },
                                    version: bigint
                                  }): __compactRuntime.CircuitResults<PS, []>;
  updateTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                     tokenColor_0: Uint8Array,
                     surface_0: TokenSurface): __compactRuntime.CircuitResults<PS, []>;
  setTokenActive(context: __compactRuntime.CircuitContext<PS>,
                 tokenColor_0: Uint8Array,
                 active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  removeToken(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  transferAdmin(context: __compactRuntime.CircuitContext<PS>,
                newAdminKeyHash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  tokenExists(context: __compactRuntime.CircuitContext<PS>,
              tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getToken(context: __compactRuntime.CircuitContext<PS>,
           tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { tokenColor: Uint8Array,
                                                                            surface: TokenSurface,
                                                                            metadata: { name: Uint8Array,
                                                                                        symbol: { is_some: boolean,
                                                                                                  value: Uint8Array
                                                                                                },
                                                                                        decimals: { is_some: boolean,
                                                                                                    value: bigint
                                                                                                  },
                                                                                        description: { is_some: boolean,
                                                                                                       value: Uint8Array
                                                                                                     },
                                                                                        image: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                        mediaType: { is_some: boolean,
                                                                                                     value: Uint8Array
                                                                                                   },
                                                                                        version: bigint
                                                                                      },
                                                                            active: boolean
                                                                          }>;
  getTokenMetadata(context: __compactRuntime.CircuitContext<PS>,
                   tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, { name: Uint8Array,
                                                                                    symbol: { is_some: boolean,
                                                                                              value: Uint8Array
                                                                                            },
                                                                                    decimals: { is_some: boolean,
                                                                                                value: bigint
                                                                                              },
                                                                                    description: { is_some: boolean,
                                                                                                   value: Uint8Array
                                                                                                 },
                                                                                    image: { is_some: boolean,
                                                                                             value: Uint8Array
                                                                                           },
                                                                                    mediaType: { is_some: boolean,
                                                                                                 value: Uint8Array
                                                                                               },
                                                                                    version: bigint
                                                                                  }>;
  getTokenSurface(context: __compactRuntime.CircuitContext<PS>,
                  tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, TokenSurface>;
  isTokenActive(context: __compactRuntime.CircuitContext<PS>,
                tokenColor_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  getCallerKeyHash(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getAdminKeyHash(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
  getRegistryVersion(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  getProjectName(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, string>;
}

export type Ledger = {
  readonly projectName: string;
  readonly registryVersion: bigint;
  readonly adminKeyHash: Uint8Array;
  entries: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { tokenColor: Uint8Array,
                                 surface: TokenSurface,
                                 metadata: { name: Uint8Array,
                                             symbol: { is_some: boolean,
                                                       value: Uint8Array
                                                     },
                                             decimals: { is_some: boolean,
                                                         value: bigint
                                                       },
                                             description: { is_some: boolean,
                                                            value: Uint8Array
                                                          },
                                             image: { is_some: boolean,
                                                      value: Uint8Array
                                                    },
                                             mediaType: { is_some: boolean,
                                                          value: Uint8Array
                                                        },
                                             version: bigint
                                           },
                                 active: boolean
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { tokenColor: Uint8Array,
  surface: TokenSurface,
  metadata: { name: Uint8Array,
              symbol: { is_some: boolean, value: Uint8Array },
              decimals: { is_some: boolean, value: bigint },
              description: { is_some: boolean, value: Uint8Array },
              image: { is_some: boolean, value: Uint8Array },
              mediaType: { is_some: boolean, value: Uint8Array },
              version: bigint
            },
  active: boolean
}]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               projectName__0: string): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
