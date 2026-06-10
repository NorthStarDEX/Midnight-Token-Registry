import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.16.0');

export var TokenSurface;
(function (TokenSurface) {
  TokenSurface[TokenSurface['unshielded'] = 0] = 'unshielded';
  TokenSurface[TokenSurface['shielded'] = 1] = 'shielded';
})(TokenSurface || (TokenSurface = {}));

const _descriptor_0 = __compactRuntime.CompactTypeOpaqueString;

const _descriptor_1 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_3 = __compactRuntime.CompactTypeBoolean;

const _descriptor_4 = new __compactRuntime.CompactTypeBytes(10);

class _Maybe_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_4.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_4.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_4.toValue(value_0.value));
  }
}

const _descriptor_5 = new _Maybe_0();

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class _Maybe_1 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_6.toValue(value_0.value));
  }
}

const _descriptor_7 = new _Maybe_1();

const _descriptor_8 = new __compactRuntime.CompactTypeBytes(256);

class _Maybe_2 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_8.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_8.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_8.toValue(value_0.value));
  }
}

const _descriptor_9 = new _Maybe_2();

class _Maybe_3 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_1.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_1.toValue(value_0.value));
  }
}

const _descriptor_10 = new _Maybe_3();

class _Metadata_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_5.alignment().concat(_descriptor_7.alignment().concat(_descriptor_9.alignment().concat(_descriptor_9.alignment().concat(_descriptor_10.alignment().concat(_descriptor_2.alignment()))))));
  }
  fromValue(value_0) {
    return {
      name: _descriptor_1.fromValue(value_0),
      symbol: _descriptor_5.fromValue(value_0),
      decimals: _descriptor_7.fromValue(value_0),
      description: _descriptor_9.fromValue(value_0),
      image: _descriptor_9.fromValue(value_0),
      mediaType: _descriptor_10.fromValue(value_0),
      version: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.name).concat(_descriptor_5.toValue(value_0.symbol).concat(_descriptor_7.toValue(value_0.decimals).concat(_descriptor_9.toValue(value_0.description).concat(_descriptor_9.toValue(value_0.image).concat(_descriptor_10.toValue(value_0.mediaType).concat(_descriptor_2.toValue(value_0.version)))))));
  }
}

const _descriptor_11 = new _Metadata_0();

const _descriptor_12 = new __compactRuntime.CompactTypeEnum(1, 1);

class _RegistryEntry_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_12.alignment().concat(_descriptor_11.alignment().concat(_descriptor_3.alignment())));
  }
  fromValue(value_0) {
    return {
      tokenColor: _descriptor_1.fromValue(value_0),
      surface: _descriptor_12.fromValue(value_0),
      metadata: _descriptor_11.fromValue(value_0),
      active: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.tokenColor).concat(_descriptor_12.toValue(value_0.surface).concat(_descriptor_11.toValue(value_0.metadata).concat(_descriptor_3.toValue(value_0.active))));
  }
}

const _descriptor_13 = new _RegistryEntry_0();

const _descriptor_14 = new __compactRuntime.CompactTypeVector(2, _descriptor_1);

const _descriptor_15 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _Either_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_3.fromValue(value_0),
      left: _descriptor_1.fromValue(value_0),
      right: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_left).concat(_descriptor_1.toValue(value_0.left).concat(_descriptor_1.toValue(value_0.right)));
  }
}

const _descriptor_16 = new _Either_0();

const _descriptor_17 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_1.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.bytes);
  }
}

const _descriptor_18 = new _ContractAddress_0();

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.localSecretKey) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named localSecretKey');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      registerToken: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`registerToken: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        const surface_0 = args_1[2];
        const metadata_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('registerToken',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 62 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('registerToken',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 62 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        if (!(typeof(surface_0) === 'number' && surface_0 >= 0 && surface_0 <= 1)) {
          __compactRuntime.typeError('registerToken',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'token-registry.compact line 62 char 1',
                                     'Enum<TokenSurface, unshielded, shielded>',
                                     surface_0)
        }
        if (!(typeof(metadata_0) === 'object' && metadata_0.name.buffer instanceof ArrayBuffer && metadata_0.name.BYTES_PER_ELEMENT === 1 && metadata_0.name.length === 32 && typeof(metadata_0.symbol) === 'object' && typeof(metadata_0.symbol.is_some) === 'boolean' && metadata_0.symbol.value.buffer instanceof ArrayBuffer && metadata_0.symbol.value.BYTES_PER_ELEMENT === 1 && metadata_0.symbol.value.length === 10 && typeof(metadata_0.decimals) === 'object' && typeof(metadata_0.decimals.is_some) === 'boolean' && typeof(metadata_0.decimals.value) === 'bigint' && metadata_0.decimals.value >= 0n && metadata_0.decimals.value <= 255n && typeof(metadata_0.description) === 'object' && typeof(metadata_0.description.is_some) === 'boolean' && metadata_0.description.value.buffer instanceof ArrayBuffer && metadata_0.description.value.BYTES_PER_ELEMENT === 1 && metadata_0.description.value.length === 256 && typeof(metadata_0.image) === 'object' && typeof(metadata_0.image.is_some) === 'boolean' && metadata_0.image.value.buffer instanceof ArrayBuffer && metadata_0.image.value.BYTES_PER_ELEMENT === 1 && metadata_0.image.value.length === 256 && typeof(metadata_0.mediaType) === 'object' && typeof(metadata_0.mediaType.is_some) === 'boolean' && metadata_0.mediaType.value.buffer instanceof ArrayBuffer && metadata_0.mediaType.value.BYTES_PER_ELEMENT === 1 && metadata_0.mediaType.value.length === 32 && typeof(metadata_0.version) === 'bigint' && metadata_0.version >= 0n && metadata_0.version <= 65535n)) {
          __compactRuntime.typeError('registerToken',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'token-registry.compact line 62 char 1',
                                     'struct Metadata<name: Bytes<32>, symbol: struct Maybe<is_some: Boolean, value: Bytes<10>>, decimals: struct Maybe<is_some: Boolean, value: Uint<0..256>>, description: struct Maybe<is_some: Boolean, value: Bytes<256>>, image: struct Maybe<is_some: Boolean, value: Bytes<256>>, mediaType: struct Maybe<is_some: Boolean, value: Bytes<32>>, version: Uint<0..65536>>',
                                     metadata_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0).concat(_descriptor_12.toValue(surface_0).concat(_descriptor_11.toValue(metadata_0))),
            alignment: _descriptor_1.alignment().concat(_descriptor_12.alignment().concat(_descriptor_11.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._registerToken_0(context,
                                               partialProofData,
                                               tokenColor_0,
                                               surface_0,
                                               metadata_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      updateTokenMetadata: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`updateTokenMetadata: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        const metadata_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('updateTokenMetadata',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 87 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('updateTokenMetadata',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 87 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        if (!(typeof(metadata_0) === 'object' && metadata_0.name.buffer instanceof ArrayBuffer && metadata_0.name.BYTES_PER_ELEMENT === 1 && metadata_0.name.length === 32 && typeof(metadata_0.symbol) === 'object' && typeof(metadata_0.symbol.is_some) === 'boolean' && metadata_0.symbol.value.buffer instanceof ArrayBuffer && metadata_0.symbol.value.BYTES_PER_ELEMENT === 1 && metadata_0.symbol.value.length === 10 && typeof(metadata_0.decimals) === 'object' && typeof(metadata_0.decimals.is_some) === 'boolean' && typeof(metadata_0.decimals.value) === 'bigint' && metadata_0.decimals.value >= 0n && metadata_0.decimals.value <= 255n && typeof(metadata_0.description) === 'object' && typeof(metadata_0.description.is_some) === 'boolean' && metadata_0.description.value.buffer instanceof ArrayBuffer && metadata_0.description.value.BYTES_PER_ELEMENT === 1 && metadata_0.description.value.length === 256 && typeof(metadata_0.image) === 'object' && typeof(metadata_0.image.is_some) === 'boolean' && metadata_0.image.value.buffer instanceof ArrayBuffer && metadata_0.image.value.BYTES_PER_ELEMENT === 1 && metadata_0.image.value.length === 256 && typeof(metadata_0.mediaType) === 'object' && typeof(metadata_0.mediaType.is_some) === 'boolean' && metadata_0.mediaType.value.buffer instanceof ArrayBuffer && metadata_0.mediaType.value.BYTES_PER_ELEMENT === 1 && metadata_0.mediaType.value.length === 32 && typeof(metadata_0.version) === 'bigint' && metadata_0.version >= 0n && metadata_0.version <= 65535n)) {
          __compactRuntime.typeError('updateTokenMetadata',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'token-registry.compact line 87 char 1',
                                     'struct Metadata<name: Bytes<32>, symbol: struct Maybe<is_some: Boolean, value: Bytes<10>>, decimals: struct Maybe<is_some: Boolean, value: Uint<0..256>>, description: struct Maybe<is_some: Boolean, value: Bytes<256>>, image: struct Maybe<is_some: Boolean, value: Bytes<256>>, mediaType: struct Maybe<is_some: Boolean, value: Bytes<32>>, version: Uint<0..65536>>',
                                     metadata_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0).concat(_descriptor_11.toValue(metadata_0)),
            alignment: _descriptor_1.alignment().concat(_descriptor_11.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._updateTokenMetadata_0(context,
                                                     partialProofData,
                                                     tokenColor_0,
                                                     metadata_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      updateTokenSurface: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`updateTokenSurface: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        const surface_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('updateTokenSurface',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 110 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('updateTokenSurface',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 110 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        if (!(typeof(surface_0) === 'number' && surface_0 >= 0 && surface_0 <= 1)) {
          __compactRuntime.typeError('updateTokenSurface',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'token-registry.compact line 110 char 1',
                                     'Enum<TokenSurface, unshielded, shielded>',
                                     surface_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0).concat(_descriptor_12.toValue(surface_0)),
            alignment: _descriptor_1.alignment().concat(_descriptor_12.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._updateTokenSurface_0(context,
                                                    partialProofData,
                                                    tokenColor_0,
                                                    surface_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      setTokenActive: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`setTokenActive: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        const active_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('setTokenActive',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 131 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('setTokenActive',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 131 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        if (!(typeof(active_0) === 'boolean')) {
          __compactRuntime.typeError('setTokenActive',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'token-registry.compact line 131 char 1',
                                     'Boolean',
                                     active_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0).concat(_descriptor_3.toValue(active_0)),
            alignment: _descriptor_1.alignment().concat(_descriptor_3.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._setTokenActive_0(context,
                                                partialProofData,
                                                tokenColor_0,
                                                active_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      removeToken: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`removeToken: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('removeToken',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 151 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('removeToken',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 151 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._removeToken_0(context,
                                             partialProofData,
                                             tokenColor_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      transferAdmin: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`transferAdmin: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const newAdminKeyHash_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('transferAdmin',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 159 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(newAdminKeyHash_0.buffer instanceof ArrayBuffer && newAdminKeyHash_0.BYTES_PER_ELEMENT === 1 && newAdminKeyHash_0.length === 32)) {
          __compactRuntime.typeError('transferAdmin',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 159 char 1',
                                     'Bytes<32>',
                                     newAdminKeyHash_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(newAdminKeyHash_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._transferAdmin_0(context,
                                               partialProofData,
                                               newAdminKeyHash_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      tokenExists: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`tokenExists: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('tokenExists',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 166 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('tokenExists',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 166 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._tokenExists_0(context,
                                             partialProofData,
                                             tokenColor_0);
        partialProofData.output = { value: _descriptor_3.toValue(result_0), alignment: _descriptor_3.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getToken: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`getToken: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getToken',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 170 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('getToken',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 170 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getToken_0(context,
                                          partialProofData,
                                          tokenColor_0);
        partialProofData.output = { value: _descriptor_13.toValue(result_0), alignment: _descriptor_13.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getTokenMetadata: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`getTokenMetadata: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getTokenMetadata',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 174 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('getTokenMetadata',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 174 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getTokenMetadata_0(context,
                                                  partialProofData,
                                                  tokenColor_0);
        partialProofData.output = { value: _descriptor_11.toValue(result_0), alignment: _descriptor_11.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getTokenSurface: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`getTokenSurface: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getTokenSurface',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 179 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('getTokenSurface',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 179 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getTokenSurface_0(context,
                                                 partialProofData,
                                                 tokenColor_0);
        partialProofData.output = { value: _descriptor_12.toValue(result_0), alignment: _descriptor_12.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      isTokenActive: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`isTokenActive: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const tokenColor_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('isTokenActive',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 184 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(tokenColor_0.buffer instanceof ArrayBuffer && tokenColor_0.BYTES_PER_ELEMENT === 1 && tokenColor_0.length === 32)) {
          __compactRuntime.typeError('isTokenActive',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'token-registry.compact line 184 char 1',
                                     'Bytes<32>',
                                     tokenColor_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(tokenColor_0),
            alignment: _descriptor_1.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._isTokenActive_0(context,
                                               partialProofData,
                                               tokenColor_0);
        partialProofData.output = { value: _descriptor_3.toValue(result_0), alignment: _descriptor_3.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getCallerKeyHash: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`getCallerKeyHash: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getCallerKeyHash',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 189 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getCallerKeyHash_0(context, partialProofData);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getAdminKeyHash: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`getAdminKeyHash: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getAdminKeyHash',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 193 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getAdminKeyHash_0(context, partialProofData);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getRegistryVersion: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`getRegistryVersion: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getRegistryVersion',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 197 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getRegistryVersion_0(context, partialProofData);
        partialProofData.output = { value: _descriptor_2.toValue(result_0), alignment: _descriptor_2.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      getProjectName: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`getProjectName: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('getProjectName',
                                     'argument 1 (as invoked from Typescript)',
                                     'token-registry.compact line 201 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._getProjectName_0(context, partialProofData);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      }
    };
    this.impureCircuits = {
      registerToken: this.circuits.registerToken,
      updateTokenMetadata: this.circuits.updateTokenMetadata,
      updateTokenSurface: this.circuits.updateTokenSurface,
      setTokenActive: this.circuits.setTokenActive,
      removeToken: this.circuits.removeToken,
      transferAdmin: this.circuits.transferAdmin,
      tokenExists: this.circuits.tokenExists,
      getToken: this.circuits.getToken,
      getTokenMetadata: this.circuits.getTokenMetadata,
      getTokenSurface: this.circuits.getTokenSurface,
      isTokenActive: this.circuits.isTokenActive,
      getCallerKeyHash: this.circuits.getCallerKeyHash,
      getAdminKeyHash: this.circuits.getAdminKeyHash,
      getRegistryVersion: this.circuits.getRegistryVersion,
      getProjectName: this.circuits.getProjectName
    };
    this.provableCircuits = {
      registerToken: this.circuits.registerToken,
      updateTokenMetadata: this.circuits.updateTokenMetadata,
      updateTokenSurface: this.circuits.updateTokenSurface,
      setTokenActive: this.circuits.setTokenActive,
      removeToken: this.circuits.removeToken,
      transferAdmin: this.circuits.transferAdmin,
      tokenExists: this.circuits.tokenExists,
      getToken: this.circuits.getToken,
      getTokenMetadata: this.circuits.getTokenMetadata,
      getTokenSurface: this.circuits.getTokenSurface,
      isTokenActive: this.circuits.isTokenActive,
      getAdminKeyHash: this.circuits.getAdminKeyHash,
      getRegistryVersion: this.circuits.getRegistryVersion,
      getProjectName: this.circuits.getProjectName
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    const projectName__0 = args_0[1];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('registerToken', new __compactRuntime.ContractOperation());
    state_0.setOperation('updateTokenMetadata', new __compactRuntime.ContractOperation());
    state_0.setOperation('updateTokenSurface', new __compactRuntime.ContractOperation());
    state_0.setOperation('setTokenActive', new __compactRuntime.ContractOperation());
    state_0.setOperation('removeToken', new __compactRuntime.ContractOperation());
    state_0.setOperation('transferAdmin', new __compactRuntime.ContractOperation());
    state_0.setOperation('tokenExists', new __compactRuntime.ContractOperation());
    state_0.setOperation('getToken', new __compactRuntime.ContractOperation());
    state_0.setOperation('getTokenMetadata', new __compactRuntime.ContractOperation());
    state_0.setOperation('getTokenSurface', new __compactRuntime.ContractOperation());
    state_0.setOperation('isTokenActive', new __compactRuntime.ContractOperation());
    state_0.setOperation('getAdminKeyHash', new __compactRuntime.ContractOperation());
    state_0.setOperation('getRegistryVersion', new __compactRuntime.ContractOperation());
    state_0.setOperation('getProjectName', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext(__compactRuntime.dummyContractAddress(), constructorContext_0.initialZswapLocalState.coinPublicKey, state_0.data, constructorContext_0.initialPrivateState);
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(''),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(1n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(2n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new Uint8Array(32)),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(3n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this.__callerKeyHash_0(context, partialProofData);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(2n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(projectName__0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const tmp_1 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(1n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_1),
                                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_14, value_0);
    return result_0;
  }
  _localSecretKey_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.localSecretKey(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('localSecretKey',
                                 'return value',
                                 'token-registry.compact line 29 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  __deriveKeyHash_0(secretKey_0) {
    return this._persistentHash_0([new Uint8Array([84, 111, 107, 101, 110, 82, 101, 103, 105, 115, 116, 114, 121, 58, 97, 100, 109, 105, 110, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   secretKey_0]);
  }
  __callerKeyHash_0(context, partialProofData) {
    return this.__deriveKeyHash_0(this._localSecretKey_0(context,
                                                         partialProofData));
  }
  __assertValidMetadata_0(metadata_0) {
    __compactRuntime.assert(!this._equal_0(metadata_0.name, new Uint8Array(32)),
                            'TokenRegistry: name is required');
    let t_0;
    __compactRuntime.assert((t_0 = metadata_0.version, t_0 > 0n),
                            'TokenRegistry: metadata version is required');
    return [];
  }
  __lookupEntry_0(context, partialProofData, tokenColor_0) {
    __compactRuntime.assert(_descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_6.toValue(3n),
                                                                                                                  alignment: _descriptor_6.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tokenColor_0),
                                                                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'TokenRegistry: unknown token');
    return _descriptor_13.fromValue(__compactRuntime.queryLedgerState(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_6.toValue(3n),
                                                                                                  alignment: _descriptor_6.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_1.toValue(tokenColor_0),
                                                                                                  alignment: _descriptor_1.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
  }
  __assertAdmin_0(context, partialProofData) {
    __compactRuntime.assert(this._equal_1(this.__callerKeyHash_0(context,
                                                                 partialProofData),
                                          _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_6.toValue(2n),
                                                                                                                                alignment: _descriptor_6.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value)),
                            'TokenRegistry: unauthorized caller');
    return [];
  }
  _registerToken_0(context,
                   partialProofData,
                   tokenColor_0,
                   surface_0,
                   metadata_0)
  {
    this.__assertAdmin_0(context, partialProofData);
    const color_0 = tokenColor_0;
    const tokenSurface_0 = surface_0;
    const tokenMetadata_0 = metadata_0;
    __compactRuntime.assert(!_descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_6.toValue(3n),
                                                                                                                   alignment: _descriptor_6.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'TokenRegistry: token already registered');
    this.__assertValidMetadata_0(tokenMetadata_0);
    const tmp_0 = { tokenColor: color_0,
                    surface: tokenSurface_0,
                    metadata: tokenMetadata_0,
                    active: true };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_6.toValue(3n),
                                                                  alignment: _descriptor_6.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(tmp_0),
                                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _updateTokenMetadata_0(context, partialProofData, tokenColor_0, metadata_0) {
    this.__assertAdmin_0(context, partialProofData);
    const color_0 = tokenColor_0;
    const tokenMetadata_0 = metadata_0;
    const current_0 = this.__lookupEntry_0(context, partialProofData, color_0);
    this.__assertValidMetadata_0(tokenMetadata_0);
    const tmp_0 = { tokenColor: current_0.tokenColor,
                    surface: current_0.surface,
                    metadata: tokenMetadata_0,
                    active: current_0.active };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_6.toValue(3n),
                                                                  alignment: _descriptor_6.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(tmp_0),
                                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _updateTokenSurface_0(context, partialProofData, tokenColor_0, surface_0) {
    this.__assertAdmin_0(context, partialProofData);
    const color_0 = tokenColor_0;
    const tokenSurface_0 = surface_0;
    const current_0 = this.__lookupEntry_0(context, partialProofData, color_0);
    const tmp_0 = { tokenColor: current_0.tokenColor,
                    surface: tokenSurface_0,
                    metadata: current_0.metadata,
                    active: current_0.active };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_6.toValue(3n),
                                                                  alignment: _descriptor_6.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(tmp_0),
                                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _setTokenActive_0(context, partialProofData, tokenColor_0, active_0) {
    this.__assertAdmin_0(context, partialProofData);
    const color_0 = tokenColor_0;
    const current_0 = this.__lookupEntry_0(context, partialProofData, color_0);
    const tmp_0 = { tokenColor: current_0.tokenColor,
                    surface: current_0.surface,
                    metadata: current_0.metadata,
                    active: active_0 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_6.toValue(3n),
                                                                  alignment: _descriptor_6.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(tmp_0),
                                                                                              alignment: _descriptor_13.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _removeToken_0(context, partialProofData, tokenColor_0) {
    this.__assertAdmin_0(context, partialProofData);
    const color_0 = tokenColor_0;
    __compactRuntime.assert(_descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_6.toValue(3n),
                                                                                                                  alignment: _descriptor_6.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'TokenRegistry: unknown token');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_6.toValue(3n),
                                                                  alignment: _descriptor_6.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(color_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { rem: { cached: false } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _transferAdmin_0(context, partialProofData, newAdminKeyHash_0) {
    this.__assertAdmin_0(context, partialProofData);
    const newHash_0 = newAdminKeyHash_0;
    __compactRuntime.assert(!this._equal_2(newHash_0, new Uint8Array(32)),
                            'TokenRegistry: admin key hash cannot be zero');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(2n),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(newHash_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    return [];
  }
  _tokenExists_0(context, partialProofData, tokenColor_0) {
    return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_6.toValue(3n),
                                                                                                 alignment: _descriptor_6.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tokenColor_0),
                                                                                                                             alignment: _descriptor_1.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value);
  }
  _getToken_0(context, partialProofData, tokenColor_0) {
    return this.__lookupEntry_0(context, partialProofData, tokenColor_0);
  }
  _getTokenMetadata_0(context, partialProofData, tokenColor_0) {
    const entry_0 = this.__lookupEntry_0(context, partialProofData, tokenColor_0);
    return entry_0.metadata;
  }
  _getTokenSurface_0(context, partialProofData, tokenColor_0) {
    const entry_0 = this.__lookupEntry_0(context, partialProofData, tokenColor_0);
    return entry_0.surface;
  }
  _isTokenActive_0(context, partialProofData, tokenColor_0) {
    const entry_0 = this.__lookupEntry_0(context, partialProofData, tokenColor_0);
    return entry_0.active;
  }
  _getCallerKeyHash_0(context, partialProofData) {
    return this.__callerKeyHash_0(context, partialProofData);
  }
  _getAdminKeyHash_0(context, partialProofData) {
    return _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_6.toValue(2n),
                                                                                                 alignment: _descriptor_6.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value);
  }
  _getRegistryVersion_0(context, partialProofData) {
    return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_6.toValue(1n),
                                                                                                 alignment: _descriptor_6.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value);
  }
  _getProjectName_0(context, partialProofData) {
    return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_6.toValue(0n),
                                                                                                 alignment: _descriptor_6.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value);
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()),
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get projectName() {
      return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_6.toValue(0n),
                                                                                                   alignment: _descriptor_6.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    get registryVersion() {
      return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_6.toValue(1n),
                                                                                                   alignment: _descriptor_6.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    get adminKeyHash() {
      return _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_6.toValue(2n),
                                                                                                   alignment: _descriptor_6.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    entries: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_6.toValue(3n),
                                                                                                     alignment: _descriptor_6.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(0n),
                                                                                                                                 alignment: _descriptor_15.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_15.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_6.toValue(3n),
                                                                                                      alignment: _descriptor_6.alignment() } }] } },
                                                                           'size',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'token-registry.compact line 27 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_6.toValue(3n),
                                                                                                     alignment: _descriptor_6.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(key_0),
                                                                                                                                 alignment: _descriptor_1.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'token-registry.compact line 27 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_13.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_6.toValue(3n),
                                                                                                      alignment: _descriptor_6.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_1.toValue(key_0),
                                                                                                      alignment: _descriptor_1.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_1.fromValue(key.value),      _descriptor_13.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ localSecretKey: (...args) => undefined });
export const pureCircuits = {};
export const contractReferenceLocations =
  { tag: 'publicLedgerArray', indices: { } };
//# sourceMappingURL=index.js.map
