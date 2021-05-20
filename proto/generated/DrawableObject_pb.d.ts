// package: 
// file: DrawableObject.proto

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";

export class DrawableString extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Common_pb.VectorF2D;
  setPosition(value?: Common_pb.VectorF2D): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string | undefined;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawableString.AsObject;
  static toObject(includeInstance: boolean, msg: DrawableString): DrawableString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawableString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawableString;
  static deserializeBinaryFromReader(message: DrawableString, reader: jspb.BinaryReader): DrawableString;
}

export namespace DrawableString {
  export type AsObject = {
    position: Common_pb.VectorF2D.AsObject,
    text?: string,
  }
}

export class Line extends jspb.Message {
  hasHead(): boolean;
  clearHead(): void;
  getHead(): Common_pb.VectorF2D;
  setHead(value?: Common_pb.VectorF2D): void;

  hasTail(): boolean;
  clearTail(): void;
  getTail(): Common_pb.VectorF2D;
  setTail(value?: Common_pb.VectorF2D): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Line.AsObject;
  static toObject(includeInstance: boolean, msg: Line): Line.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Line, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Line;
  static deserializeBinaryFromReader(message: Line, reader: jspb.BinaryReader): Line;
}

export namespace Line {
  export type AsObject = {
    head: Common_pb.VectorF2D.AsObject,
    tail: Common_pb.VectorF2D.AsObject,
  }
}

export class Circle extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Common_pb.VectorF2D;
  setPosition(value?: Common_pb.VectorF2D): void;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): number | undefined;
  setRadius(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Circle.AsObject;
  static toObject(includeInstance: boolean, msg: Circle): Circle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Circle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Circle;
  static deserializeBinaryFromReader(message: Circle, reader: jspb.BinaryReader): Circle;
}

export namespace Circle {
  export type AsObject = {
    position: Common_pb.VectorF2D.AsObject,
    radius?: number,
  }
}

export class Region extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<Common_pb.VectorF2D>;
  setPositionsList(value: Array<Common_pb.VectorF2D>): void;
  addPositions(value?: Common_pb.VectorF2D, index?: number): Common_pb.VectorF2D;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    positionsList: Array<Common_pb.VectorF2D.AsObject>,
  }
}

export class DrawableObject extends jspb.Message {
  hasStrokecolor(): boolean;
  clearStrokecolor(): void;
  getStrokecolor(): number | undefined;
  setStrokecolor(value: number): void;

  hasFillcolor(): boolean;
  clearFillcolor(): void;
  getFillcolor(): number | undefined;
  setFillcolor(value: number): void;

  hasStrokewidth(): boolean;
  clearStrokewidth(): void;
  getStrokewidth(): number | undefined;
  setStrokewidth(value: number): void;

  hasFontsize(): boolean;
  clearFontsize(): void;
  getFontsize(): number | undefined;
  setFontsize(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): DrawableTypeMap[keyof DrawableTypeMap] | undefined;
  setType(value: DrawableTypeMap[keyof DrawableTypeMap]): void;

  hasCircle(): boolean;
  clearCircle(): void;
  getCircle(): Circle | undefined;
  setCircle(value?: Circle): void;

  hasRegion(): boolean;
  clearRegion(): void;
  getRegion(): Region | undefined;
  setRegion(value?: Region): void;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): Common_pb.VectorF2D | undefined;
  setPath(value?: Common_pb.VectorF2D): void;

  hasLine(): boolean;
  clearLine(): void;
  getLine(): Line | undefined;
  setLine(value?: Line): void;

  hasString(): boolean;
  clearString(): void;
  getString(): DrawableString | undefined;
  setString(value?: DrawableString): void;

  getEventCase(): DrawableObject.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DrawableObject.AsObject;
  static toObject(includeInstance: boolean, msg: DrawableObject): DrawableObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DrawableObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DrawableObject;
  static deserializeBinaryFromReader(message: DrawableObject, reader: jspb.BinaryReader): DrawableObject;
}

export namespace DrawableObject {
  export type AsObject = {
    strokecolor?: number,
    fillcolor?: number,
    strokewidth?: number,
    fontsize?: number,
    type?: DrawableTypeMap[keyof DrawableTypeMap],
    circle?: Circle.AsObject,
    region?: Region.AsObject,
    path?: Common_pb.VectorF2D.AsObject,
    line?: Line.AsObject,
    string?: DrawableString.AsObject,
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    CIRCLE = 6,
    REGION = 7,
    PATH = 8,
    LINE = 9,
    STRING = 10,
  }
}

export interface DrawableTypeMap {
  CIRCLE: 0;
  LINE: 1;
  STRING: 2;
  PATH: 3;
  REGION: 4;
}

export const DrawableType: DrawableTypeMap;

