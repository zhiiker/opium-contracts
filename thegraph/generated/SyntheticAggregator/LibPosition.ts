// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class LibPosition extends SmartContract {
  static bind(address: Address): LibPosition {
    return new LibPosition("LibPosition", address);
  }

  getLongTokenId(_hash: Bytes): BigInt {
    let result = super.call("getLongTokenId", [
      EthereumValue.fromFixedBytes(_hash)
    ]);

    return result[0].toBigInt();
  }

  try_getLongTokenId(_hash: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getLongTokenId", [
      EthereumValue.fromFixedBytes(_hash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getShortTokenId(_hash: Bytes): BigInt {
    let result = super.call("getShortTokenId", [
      EthereumValue.fromFixedBytes(_hash)
    ]);

    return result[0].toBigInt();
  }

  try_getShortTokenId(_hash: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getShortTokenId", [
      EthereumValue.fromFixedBytes(_hash)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}
