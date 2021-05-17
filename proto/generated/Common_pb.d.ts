// package: 
// file: Common.proto

import * as jspb from "google-protobuf";

export class VectorF2D extends jspb.Message {
  hasX(): boolean;
  clearX(): void;
  getX(): number | undefined;
  setX(value: number): void;

  hasY(): boolean;
  clearY(): void;
  getY(): number | undefined;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VectorF2D.AsObject;
  static toObject(includeInstance: boolean, msg: VectorF2D): VectorF2D.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VectorF2D, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VectorF2D;
  static deserializeBinaryFromReader(message: VectorF2D, reader: jspb.BinaryReader): VectorF2D;
}

export namespace VectorF2D {
  export type AsObject = {
    x?: number,
    y?: number,
  }
}

