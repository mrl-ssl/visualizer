// package: 
// file: Referee.proto

import * as jspb from "google-protobuf";
import * as Common_pb from "./Common_pb";

export class RobotId extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): TeamMap[keyof TeamMap] | undefined;
  setTeam(value: TeamMap[keyof TeamMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotId.AsObject;
  static toObject(includeInstance: boolean, msg: RobotId): RobotId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotId;
  static deserializeBinaryFromReader(message: RobotId, reader: jspb.BinaryReader): RobotId;
}

export namespace RobotId {
  export type AsObject = {
    id?: number,
    team?: TeamMap[keyof TeamMap],
  }
}

export class GameEvent extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): GameEvent.TypeMap[keyof GameEvent.TypeMap] | undefined;
  setType(value: GameEvent.TypeMap[keyof GameEvent.TypeMap]): void;

  clearOriginList(): void;
  getOriginList(): Array<string>;
  setOriginList(value: Array<string>): void;
  addOrigin(value: string, index?: number): string;

  hasBallLeftFieldTouchLine(): boolean;
  clearBallLeftFieldTouchLine(): void;
  getBallLeftFieldTouchLine(): GameEvent.BallLeftField | undefined;
  setBallLeftFieldTouchLine(value?: GameEvent.BallLeftField): void;

  hasBallLeftFieldGoalLine(): boolean;
  clearBallLeftFieldGoalLine(): void;
  getBallLeftFieldGoalLine(): GameEvent.BallLeftField | undefined;
  setBallLeftFieldGoalLine(value?: GameEvent.BallLeftField): void;

  hasAimlessKick(): boolean;
  clearAimlessKick(): void;
  getAimlessKick(): GameEvent.AimlessKick | undefined;
  setAimlessKick(value?: GameEvent.AimlessKick): void;

  hasAttackerTooCloseToDefenseArea(): boolean;
  clearAttackerTooCloseToDefenseArea(): void;
  getAttackerTooCloseToDefenseArea(): GameEvent.AttackerTooCloseToDefenseArea | undefined;
  setAttackerTooCloseToDefenseArea(value?: GameEvent.AttackerTooCloseToDefenseArea): void;

  hasDefenderInDefenseArea(): boolean;
  clearDefenderInDefenseArea(): void;
  getDefenderInDefenseArea(): GameEvent.DefenderInDefenseArea | undefined;
  setDefenderInDefenseArea(value?: GameEvent.DefenderInDefenseArea): void;

  hasBoundaryCrossing(): boolean;
  clearBoundaryCrossing(): void;
  getBoundaryCrossing(): GameEvent.BoundaryCrossing | undefined;
  setBoundaryCrossing(value?: GameEvent.BoundaryCrossing): void;

  hasKeeperHeldBall(): boolean;
  clearKeeperHeldBall(): void;
  getKeeperHeldBall(): GameEvent.KeeperHeldBall | undefined;
  setKeeperHeldBall(value?: GameEvent.KeeperHeldBall): void;

  hasBotDribbledBallTooFar(): boolean;
  clearBotDribbledBallTooFar(): void;
  getBotDribbledBallTooFar(): GameEvent.BotDribbledBallTooFar | undefined;
  setBotDribbledBallTooFar(value?: GameEvent.BotDribbledBallTooFar): void;

  hasBotPushedBot(): boolean;
  clearBotPushedBot(): void;
  getBotPushedBot(): GameEvent.BotPushedBot | undefined;
  setBotPushedBot(value?: GameEvent.BotPushedBot): void;

  hasBotHeldBallDeliberately(): boolean;
  clearBotHeldBallDeliberately(): void;
  getBotHeldBallDeliberately(): GameEvent.BotHeldBallDeliberately | undefined;
  setBotHeldBallDeliberately(value?: GameEvent.BotHeldBallDeliberately): void;

  hasBotTippedOver(): boolean;
  clearBotTippedOver(): void;
  getBotTippedOver(): GameEvent.BotTippedOver | undefined;
  setBotTippedOver(value?: GameEvent.BotTippedOver): void;

  hasAttackerTouchedBallInDefenseArea(): boolean;
  clearAttackerTouchedBallInDefenseArea(): void;
  getAttackerTouchedBallInDefenseArea(): GameEvent.AttackerTouchedBallInDefenseArea | undefined;
  setAttackerTouchedBallInDefenseArea(value?: GameEvent.AttackerTouchedBallInDefenseArea): void;

  hasBotKickedBallTooFast(): boolean;
  clearBotKickedBallTooFast(): void;
  getBotKickedBallTooFast(): GameEvent.BotKickedBallTooFast | undefined;
  setBotKickedBallTooFast(value?: GameEvent.BotKickedBallTooFast): void;

  hasBotCrashUnique(): boolean;
  clearBotCrashUnique(): void;
  getBotCrashUnique(): GameEvent.BotCrashUnique | undefined;
  setBotCrashUnique(value?: GameEvent.BotCrashUnique): void;

  hasBotCrashDrawn(): boolean;
  clearBotCrashDrawn(): void;
  getBotCrashDrawn(): GameEvent.BotCrashDrawn | undefined;
  setBotCrashDrawn(value?: GameEvent.BotCrashDrawn): void;

  hasDefenderTooCloseToKickPoint(): boolean;
  clearDefenderTooCloseToKickPoint(): void;
  getDefenderTooCloseToKickPoint(): GameEvent.DefenderTooCloseToKickPoint | undefined;
  setDefenderTooCloseToKickPoint(value?: GameEvent.DefenderTooCloseToKickPoint): void;

  hasBotTooFastInStop(): boolean;
  clearBotTooFastInStop(): void;
  getBotTooFastInStop(): GameEvent.BotTooFastInStop | undefined;
  setBotTooFastInStop(value?: GameEvent.BotTooFastInStop): void;

  hasBotInterferedPlacement(): boolean;
  clearBotInterferedPlacement(): void;
  getBotInterferedPlacement(): GameEvent.BotInterferedPlacement | undefined;
  setBotInterferedPlacement(value?: GameEvent.BotInterferedPlacement): void;

  hasPossibleGoal(): boolean;
  clearPossibleGoal(): void;
  getPossibleGoal(): GameEvent.Goal | undefined;
  setPossibleGoal(value?: GameEvent.Goal): void;

  hasGoal(): boolean;
  clearGoal(): void;
  getGoal(): GameEvent.Goal | undefined;
  setGoal(value?: GameEvent.Goal): void;

  hasInvalidGoal(): boolean;
  clearInvalidGoal(): void;
  getInvalidGoal(): GameEvent.Goal | undefined;
  setInvalidGoal(value?: GameEvent.Goal): void;

  hasAttackerDoubleTouchedBall(): boolean;
  clearAttackerDoubleTouchedBall(): void;
  getAttackerDoubleTouchedBall(): GameEvent.AttackerDoubleTouchedBall | undefined;
  setAttackerDoubleTouchedBall(value?: GameEvent.AttackerDoubleTouchedBall): void;

  hasPlacementSucceeded(): boolean;
  clearPlacementSucceeded(): void;
  getPlacementSucceeded(): GameEvent.PlacementSucceeded | undefined;
  setPlacementSucceeded(value?: GameEvent.PlacementSucceeded): void;

  hasPenaltyKickFailed(): boolean;
  clearPenaltyKickFailed(): void;
  getPenaltyKickFailed(): GameEvent.PenaltyKickFailed | undefined;
  setPenaltyKickFailed(value?: GameEvent.PenaltyKickFailed): void;

  hasNoProgressInGame(): boolean;
  clearNoProgressInGame(): void;
  getNoProgressInGame(): GameEvent.NoProgressInGame | undefined;
  setNoProgressInGame(value?: GameEvent.NoProgressInGame): void;

  hasPlacementFailed(): boolean;
  clearPlacementFailed(): void;
  getPlacementFailed(): GameEvent.PlacementFailed | undefined;
  setPlacementFailed(value?: GameEvent.PlacementFailed): void;

  hasMultipleCards(): boolean;
  clearMultipleCards(): void;
  getMultipleCards(): GameEvent.MultipleCards | undefined;
  setMultipleCards(value?: GameEvent.MultipleCards): void;

  hasMultipleFouls(): boolean;
  clearMultipleFouls(): void;
  getMultipleFouls(): GameEvent.MultipleFouls | undefined;
  setMultipleFouls(value?: GameEvent.MultipleFouls): void;

  hasBotSubstitution(): boolean;
  clearBotSubstitution(): void;
  getBotSubstitution(): GameEvent.BotSubstitution | undefined;
  setBotSubstitution(value?: GameEvent.BotSubstitution): void;

  hasTooManyRobots(): boolean;
  clearTooManyRobots(): void;
  getTooManyRobots(): GameEvent.TooManyRobots | undefined;
  setTooManyRobots(value?: GameEvent.TooManyRobots): void;

  hasChallengeFlag(): boolean;
  clearChallengeFlag(): void;
  getChallengeFlag(): GameEvent.ChallengeFlag | undefined;
  setChallengeFlag(value?: GameEvent.ChallengeFlag): void;

  hasEmergencyStop(): boolean;
  clearEmergencyStop(): void;
  getEmergencyStop(): GameEvent.EmergencyStop | undefined;
  setEmergencyStop(value?: GameEvent.EmergencyStop): void;

  hasUnsportingBehaviorMinor(): boolean;
  clearUnsportingBehaviorMinor(): void;
  getUnsportingBehaviorMinor(): GameEvent.UnsportingBehaviorMinor | undefined;
  setUnsportingBehaviorMinor(value?: GameEvent.UnsportingBehaviorMinor): void;

  hasUnsportingBehaviorMajor(): boolean;
  clearUnsportingBehaviorMajor(): void;
  getUnsportingBehaviorMajor(): GameEvent.UnsportingBehaviorMajor | undefined;
  setUnsportingBehaviorMajor(value?: GameEvent.UnsportingBehaviorMajor): void;

  hasPrepared(): boolean;
  clearPrepared(): void;
  getPrepared(): GameEvent.Prepared | undefined;
  setPrepared(value?: GameEvent.Prepared): void;

  hasIndirectGoal(): boolean;
  clearIndirectGoal(): void;
  getIndirectGoal(): GameEvent.IndirectGoal | undefined;
  setIndirectGoal(value?: GameEvent.IndirectGoal): void;

  hasChippedGoal(): boolean;
  clearChippedGoal(): void;
  getChippedGoal(): GameEvent.ChippedGoal | undefined;
  setChippedGoal(value?: GameEvent.ChippedGoal): void;

  hasKickTimeout(): boolean;
  clearKickTimeout(): void;
  getKickTimeout(): GameEvent.KickTimeout | undefined;
  setKickTimeout(value?: GameEvent.KickTimeout): void;

  hasAttackerTouchedOpponentInDefenseArea(): boolean;
  clearAttackerTouchedOpponentInDefenseArea(): void;
  getAttackerTouchedOpponentInDefenseArea(): GameEvent.AttackerTouchedOpponentInDefenseArea | undefined;
  setAttackerTouchedOpponentInDefenseArea(value?: GameEvent.AttackerTouchedOpponentInDefenseArea): void;

  hasAttackerTouchedOpponentInDefenseAreaSkipped(): boolean;
  clearAttackerTouchedOpponentInDefenseAreaSkipped(): void;
  getAttackerTouchedOpponentInDefenseAreaSkipped(): GameEvent.AttackerTouchedOpponentInDefenseArea | undefined;
  setAttackerTouchedOpponentInDefenseAreaSkipped(value?: GameEvent.AttackerTouchedOpponentInDefenseArea): void;

  hasBotCrashUniqueSkipped(): boolean;
  clearBotCrashUniqueSkipped(): void;
  getBotCrashUniqueSkipped(): GameEvent.BotCrashUnique | undefined;
  setBotCrashUniqueSkipped(value?: GameEvent.BotCrashUnique): void;

  hasBotPushedBotSkipped(): boolean;
  clearBotPushedBotSkipped(): void;
  getBotPushedBotSkipped(): GameEvent.BotPushedBot | undefined;
  setBotPushedBotSkipped(value?: GameEvent.BotPushedBot): void;

  hasDefenderInDefenseAreaPartially(): boolean;
  clearDefenderInDefenseAreaPartially(): void;
  getDefenderInDefenseAreaPartially(): GameEvent.DefenderInDefenseAreaPartially | undefined;
  setDefenderInDefenseAreaPartially(value?: GameEvent.DefenderInDefenseAreaPartially): void;

  hasMultiplePlacementFailures(): boolean;
  clearMultiplePlacementFailures(): void;
  getMultiplePlacementFailures(): GameEvent.MultiplePlacementFailures | undefined;
  setMultiplePlacementFailures(value?: GameEvent.MultiplePlacementFailures): void;

  getEventCase(): GameEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GameEvent): GameEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEvent;
  static deserializeBinaryFromReader(message: GameEvent, reader: jspb.BinaryReader): GameEvent;
}

export namespace GameEvent {
  export type AsObject = {
    type?: GameEvent.TypeMap[keyof GameEvent.TypeMap],
    originList: Array<string>,
    ballLeftFieldTouchLine?: GameEvent.BallLeftField.AsObject,
    ballLeftFieldGoalLine?: GameEvent.BallLeftField.AsObject,
    aimlessKick?: GameEvent.AimlessKick.AsObject,
    attackerTooCloseToDefenseArea?: GameEvent.AttackerTooCloseToDefenseArea.AsObject,
    defenderInDefenseArea?: GameEvent.DefenderInDefenseArea.AsObject,
    boundaryCrossing?: GameEvent.BoundaryCrossing.AsObject,
    keeperHeldBall?: GameEvent.KeeperHeldBall.AsObject,
    botDribbledBallTooFar?: GameEvent.BotDribbledBallTooFar.AsObject,
    botPushedBot?: GameEvent.BotPushedBot.AsObject,
    botHeldBallDeliberately?: GameEvent.BotHeldBallDeliberately.AsObject,
    botTippedOver?: GameEvent.BotTippedOver.AsObject,
    attackerTouchedBallInDefenseArea?: GameEvent.AttackerTouchedBallInDefenseArea.AsObject,
    botKickedBallTooFast?: GameEvent.BotKickedBallTooFast.AsObject,
    botCrashUnique?: GameEvent.BotCrashUnique.AsObject,
    botCrashDrawn?: GameEvent.BotCrashDrawn.AsObject,
    defenderTooCloseToKickPoint?: GameEvent.DefenderTooCloseToKickPoint.AsObject,
    botTooFastInStop?: GameEvent.BotTooFastInStop.AsObject,
    botInterferedPlacement?: GameEvent.BotInterferedPlacement.AsObject,
    possibleGoal?: GameEvent.Goal.AsObject,
    goal?: GameEvent.Goal.AsObject,
    invalidGoal?: GameEvent.Goal.AsObject,
    attackerDoubleTouchedBall?: GameEvent.AttackerDoubleTouchedBall.AsObject,
    placementSucceeded?: GameEvent.PlacementSucceeded.AsObject,
    penaltyKickFailed?: GameEvent.PenaltyKickFailed.AsObject,
    noProgressInGame?: GameEvent.NoProgressInGame.AsObject,
    placementFailed?: GameEvent.PlacementFailed.AsObject,
    multipleCards?: GameEvent.MultipleCards.AsObject,
    multipleFouls?: GameEvent.MultipleFouls.AsObject,
    botSubstitution?: GameEvent.BotSubstitution.AsObject,
    tooManyRobots?: GameEvent.TooManyRobots.AsObject,
    challengeFlag?: GameEvent.ChallengeFlag.AsObject,
    emergencyStop?: GameEvent.EmergencyStop.AsObject,
    unsportingBehaviorMinor?: GameEvent.UnsportingBehaviorMinor.AsObject,
    unsportingBehaviorMajor?: GameEvent.UnsportingBehaviorMajor.AsObject,
    prepared?: GameEvent.Prepared.AsObject,
    indirectGoal?: GameEvent.IndirectGoal.AsObject,
    chippedGoal?: GameEvent.ChippedGoal.AsObject,
    kickTimeout?: GameEvent.KickTimeout.AsObject,
    attackerTouchedOpponentInDefenseArea?: GameEvent.AttackerTouchedOpponentInDefenseArea.AsObject,
    attackerTouchedOpponentInDefenseAreaSkipped?: GameEvent.AttackerTouchedOpponentInDefenseArea.AsObject,
    botCrashUniqueSkipped?: GameEvent.BotCrashUnique.AsObject,
    botPushedBotSkipped?: GameEvent.BotPushedBot.AsObject,
    defenderInDefenseAreaPartially?: GameEvent.DefenderInDefenseAreaPartially.AsObject,
    multiplePlacementFailures?: GameEvent.MultiplePlacementFailures.AsObject,
  }

  export class BallLeftField extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BallLeftField.AsObject;
    static toObject(includeInstance: boolean, msg: BallLeftField): BallLeftField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BallLeftField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BallLeftField;
    static deserializeBinaryFromReader(message: BallLeftField, reader: jspb.BinaryReader): BallLeftField;
  }

  export namespace BallLeftField {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class AimlessKick extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasKickLocation(): boolean;
    clearKickLocation(): void;
    getKickLocation(): Common_pb.VectorF2D | undefined;
    setKickLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AimlessKick.AsObject;
    static toObject(includeInstance: boolean, msg: AimlessKick): AimlessKick.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AimlessKick, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AimlessKick;
    static deserializeBinaryFromReader(message: AimlessKick, reader: jspb.BinaryReader): AimlessKick;
  }

  export namespace AimlessKick {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      kickLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class Goal extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasKickingTeam(): boolean;
    clearKickingTeam(): void;
    getKickingTeam(): TeamMap[keyof TeamMap] | undefined;
    setKickingTeam(value: TeamMap[keyof TeamMap]): void;

    hasKickingBot(): boolean;
    clearKickingBot(): void;
    getKickingBot(): number | undefined;
    setKickingBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasKickLocation(): boolean;
    clearKickLocation(): void;
    getKickLocation(): Common_pb.VectorF2D | undefined;
    setKickLocation(value?: Common_pb.VectorF2D): void;

    hasMaxBallHeight(): boolean;
    clearMaxBallHeight(): void;
    getMaxBallHeight(): number | undefined;
    setMaxBallHeight(value: number): void;

    hasNumRobotsByTeam(): boolean;
    clearNumRobotsByTeam(): void;
    getNumRobotsByTeam(): number | undefined;
    setNumRobotsByTeam(value: number): void;

    hasLastTouchByTeam(): boolean;
    clearLastTouchByTeam(): void;
    getLastTouchByTeam(): number | undefined;
    setLastTouchByTeam(value: number): void;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): string | undefined;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Goal.AsObject;
    static toObject(includeInstance: boolean, msg: Goal): Goal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Goal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Goal;
    static deserializeBinaryFromReader(message: Goal, reader: jspb.BinaryReader): Goal;
  }

  export namespace Goal {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      kickingTeam?: TeamMap[keyof TeamMap],
      kickingBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      kickLocation?: Common_pb.VectorF2D.AsObject,
      maxBallHeight?: number,
      numRobotsByTeam?: number,
      lastTouchByTeam?: number,
      message?: string,
    }
  }

  export class IndirectGoal extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasKickLocation(): boolean;
    clearKickLocation(): void;
    getKickLocation(): Common_pb.VectorF2D | undefined;
    setKickLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndirectGoal.AsObject;
    static toObject(includeInstance: boolean, msg: IndirectGoal): IndirectGoal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndirectGoal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndirectGoal;
    static deserializeBinaryFromReader(message: IndirectGoal, reader: jspb.BinaryReader): IndirectGoal;
  }

  export namespace IndirectGoal {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      kickLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class ChippedGoal extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasKickLocation(): boolean;
    clearKickLocation(): void;
    getKickLocation(): Common_pb.VectorF2D | undefined;
    setKickLocation(value?: Common_pb.VectorF2D): void;

    hasMaxBallHeight(): boolean;
    clearMaxBallHeight(): void;
    getMaxBallHeight(): number | undefined;
    setMaxBallHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChippedGoal.AsObject;
    static toObject(includeInstance: boolean, msg: ChippedGoal): ChippedGoal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChippedGoal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChippedGoal;
    static deserializeBinaryFromReader(message: ChippedGoal, reader: jspb.BinaryReader): ChippedGoal;
  }

  export namespace ChippedGoal {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      kickLocation?: Common_pb.VectorF2D.AsObject,
      maxBallHeight?: number,
    }
  }

  export class BotTooFastInStop extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): number | undefined;
    setSpeed(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotTooFastInStop.AsObject;
    static toObject(includeInstance: boolean, msg: BotTooFastInStop): BotTooFastInStop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotTooFastInStop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotTooFastInStop;
    static deserializeBinaryFromReader(message: BotTooFastInStop, reader: jspb.BinaryReader): BotTooFastInStop;
  }

  export namespace BotTooFastInStop {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      speed?: number,
    }
  }

  export class DefenderTooCloseToKickPoint extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefenderTooCloseToKickPoint.AsObject;
    static toObject(includeInstance: boolean, msg: DefenderTooCloseToKickPoint): DefenderTooCloseToKickPoint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefenderTooCloseToKickPoint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefenderTooCloseToKickPoint;
    static deserializeBinaryFromReader(message: DefenderTooCloseToKickPoint, reader: jspb.BinaryReader): DefenderTooCloseToKickPoint;
  }

  export namespace DefenderTooCloseToKickPoint {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      distance?: number,
    }
  }

  export class BotCrashDrawn extends jspb.Message {
    hasBotYellow(): boolean;
    clearBotYellow(): void;
    getBotYellow(): number | undefined;
    setBotYellow(value: number): void;

    hasBotBlue(): boolean;
    clearBotBlue(): void;
    getBotBlue(): number | undefined;
    setBotBlue(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasCrashSpeed(): boolean;
    clearCrashSpeed(): void;
    getCrashSpeed(): number | undefined;
    setCrashSpeed(value: number): void;

    hasSpeedDiff(): boolean;
    clearSpeedDiff(): void;
    getSpeedDiff(): number | undefined;
    setSpeedDiff(value: number): void;

    hasCrashAngle(): boolean;
    clearCrashAngle(): void;
    getCrashAngle(): number | undefined;
    setCrashAngle(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotCrashDrawn.AsObject;
    static toObject(includeInstance: boolean, msg: BotCrashDrawn): BotCrashDrawn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotCrashDrawn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotCrashDrawn;
    static deserializeBinaryFromReader(message: BotCrashDrawn, reader: jspb.BinaryReader): BotCrashDrawn;
  }

  export namespace BotCrashDrawn {
    export type AsObject = {
      botYellow?: number,
      botBlue?: number,
      location?: Common_pb.VectorF2D.AsObject,
      crashSpeed?: number,
      speedDiff?: number,
      crashAngle?: number,
    }
  }

  export class BotCrashUnique extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasViolator(): boolean;
    clearViolator(): void;
    getViolator(): number | undefined;
    setViolator(value: number): void;

    hasVictim(): boolean;
    clearVictim(): void;
    getVictim(): number | undefined;
    setVictim(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasCrashSpeed(): boolean;
    clearCrashSpeed(): void;
    getCrashSpeed(): number | undefined;
    setCrashSpeed(value: number): void;

    hasSpeedDiff(): boolean;
    clearSpeedDiff(): void;
    getSpeedDiff(): number | undefined;
    setSpeedDiff(value: number): void;

    hasCrashAngle(): boolean;
    clearCrashAngle(): void;
    getCrashAngle(): number | undefined;
    setCrashAngle(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotCrashUnique.AsObject;
    static toObject(includeInstance: boolean, msg: BotCrashUnique): BotCrashUnique.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotCrashUnique, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotCrashUnique;
    static deserializeBinaryFromReader(message: BotCrashUnique, reader: jspb.BinaryReader): BotCrashUnique;
  }

  export namespace BotCrashUnique {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      violator?: number,
      victim?: number,
      location?: Common_pb.VectorF2D.AsObject,
      crashSpeed?: number,
      speedDiff?: number,
      crashAngle?: number,
    }
  }

  export class BotPushedBot extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasViolator(): boolean;
    clearViolator(): void;
    getViolator(): number | undefined;
    setViolator(value: number): void;

    hasVictim(): boolean;
    clearVictim(): void;
    getVictim(): number | undefined;
    setVictim(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasPushedDistance(): boolean;
    clearPushedDistance(): void;
    getPushedDistance(): number | undefined;
    setPushedDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotPushedBot.AsObject;
    static toObject(includeInstance: boolean, msg: BotPushedBot): BotPushedBot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotPushedBot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotPushedBot;
    static deserializeBinaryFromReader(message: BotPushedBot, reader: jspb.BinaryReader): BotPushedBot;
  }

  export namespace BotPushedBot {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      violator?: number,
      victim?: number,
      location?: Common_pb.VectorF2D.AsObject,
      pushedDistance?: number,
    }
  }

  export class BotTippedOver extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasBallLocation(): boolean;
    clearBallLocation(): void;
    getBallLocation(): Common_pb.VectorF2D | undefined;
    setBallLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotTippedOver.AsObject;
    static toObject(includeInstance: boolean, msg: BotTippedOver): BotTippedOver.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotTippedOver, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotTippedOver;
    static deserializeBinaryFromReader(message: BotTippedOver, reader: jspb.BinaryReader): BotTippedOver;
  }

  export namespace BotTippedOver {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      ballLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class DefenderInDefenseArea extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefenderInDefenseArea.AsObject;
    static toObject(includeInstance: boolean, msg: DefenderInDefenseArea): DefenderInDefenseArea.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefenderInDefenseArea, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefenderInDefenseArea;
    static deserializeBinaryFromReader(message: DefenderInDefenseArea, reader: jspb.BinaryReader): DefenderInDefenseArea;
  }

  export namespace DefenderInDefenseArea {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      distance?: number,
    }
  }

  export class DefenderInDefenseAreaPartially extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    hasBallLocation(): boolean;
    clearBallLocation(): void;
    getBallLocation(): Common_pb.VectorF2D | undefined;
    setBallLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefenderInDefenseAreaPartially.AsObject;
    static toObject(includeInstance: boolean, msg: DefenderInDefenseAreaPartially): DefenderInDefenseAreaPartially.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefenderInDefenseAreaPartially, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefenderInDefenseAreaPartially;
    static deserializeBinaryFromReader(message: DefenderInDefenseAreaPartially, reader: jspb.BinaryReader): DefenderInDefenseAreaPartially;
  }

  export namespace DefenderInDefenseAreaPartially {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      distance?: number,
      ballLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class AttackerTouchedBallInDefenseArea extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttackerTouchedBallInDefenseArea.AsObject;
    static toObject(includeInstance: boolean, msg: AttackerTouchedBallInDefenseArea): AttackerTouchedBallInDefenseArea.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttackerTouchedBallInDefenseArea, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttackerTouchedBallInDefenseArea;
    static deserializeBinaryFromReader(message: AttackerTouchedBallInDefenseArea, reader: jspb.BinaryReader): AttackerTouchedBallInDefenseArea;
  }

  export namespace AttackerTouchedBallInDefenseArea {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      distance?: number,
    }
  }

  export class BotKickedBallTooFast extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasInitialBallSpeed(): boolean;
    clearInitialBallSpeed(): void;
    getInitialBallSpeed(): number | undefined;
    setInitialBallSpeed(value: number): void;

    hasChipped(): boolean;
    clearChipped(): void;
    getChipped(): boolean | undefined;
    setChipped(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotKickedBallTooFast.AsObject;
    static toObject(includeInstance: boolean, msg: BotKickedBallTooFast): BotKickedBallTooFast.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotKickedBallTooFast, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotKickedBallTooFast;
    static deserializeBinaryFromReader(message: BotKickedBallTooFast, reader: jspb.BinaryReader): BotKickedBallTooFast;
  }

  export namespace BotKickedBallTooFast {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      initialBallSpeed?: number,
      chipped?: boolean,
    }
  }

  export class BotDribbledBallTooFar extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): Common_pb.VectorF2D | undefined;
    setStart(value?: Common_pb.VectorF2D): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): Common_pb.VectorF2D | undefined;
    setEnd(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotDribbledBallTooFar.AsObject;
    static toObject(includeInstance: boolean, msg: BotDribbledBallTooFar): BotDribbledBallTooFar.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotDribbledBallTooFar, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotDribbledBallTooFar;
    static deserializeBinaryFromReader(message: BotDribbledBallTooFar, reader: jspb.BinaryReader): BotDribbledBallTooFar;
  }

  export namespace BotDribbledBallTooFar {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      start?: Common_pb.VectorF2D.AsObject,
      end?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class AttackerTouchedOpponentInDefenseArea extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasVictim(): boolean;
    clearVictim(): void;
    getVictim(): number | undefined;
    setVictim(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttackerTouchedOpponentInDefenseArea.AsObject;
    static toObject(includeInstance: boolean, msg: AttackerTouchedOpponentInDefenseArea): AttackerTouchedOpponentInDefenseArea.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttackerTouchedOpponentInDefenseArea, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttackerTouchedOpponentInDefenseArea;
    static deserializeBinaryFromReader(message: AttackerTouchedOpponentInDefenseArea, reader: jspb.BinaryReader): AttackerTouchedOpponentInDefenseArea;
  }

  export namespace AttackerTouchedOpponentInDefenseArea {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      victim?: number,
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class AttackerDoubleTouchedBall extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttackerDoubleTouchedBall.AsObject;
    static toObject(includeInstance: boolean, msg: AttackerDoubleTouchedBall): AttackerDoubleTouchedBall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttackerDoubleTouchedBall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttackerDoubleTouchedBall;
    static deserializeBinaryFromReader(message: AttackerDoubleTouchedBall, reader: jspb.BinaryReader): AttackerDoubleTouchedBall;
  }

  export namespace AttackerDoubleTouchedBall {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class AttackerTooCloseToDefenseArea extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    hasBallLocation(): boolean;
    clearBallLocation(): void;
    getBallLocation(): Common_pb.VectorF2D | undefined;
    setBallLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AttackerTooCloseToDefenseArea.AsObject;
    static toObject(includeInstance: boolean, msg: AttackerTooCloseToDefenseArea): AttackerTooCloseToDefenseArea.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AttackerTooCloseToDefenseArea, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AttackerTooCloseToDefenseArea;
    static deserializeBinaryFromReader(message: AttackerTooCloseToDefenseArea, reader: jspb.BinaryReader): AttackerTooCloseToDefenseArea;
  }

  export namespace AttackerTooCloseToDefenseArea {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      distance?: number,
      ballLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class BotHeldBallDeliberately extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): number | undefined;
    setDuration(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotHeldBallDeliberately.AsObject;
    static toObject(includeInstance: boolean, msg: BotHeldBallDeliberately): BotHeldBallDeliberately.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotHeldBallDeliberately, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotHeldBallDeliberately;
    static deserializeBinaryFromReader(message: BotHeldBallDeliberately, reader: jspb.BinaryReader): BotHeldBallDeliberately;
  }

  export namespace BotHeldBallDeliberately {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
      duration?: number,
    }
  }

  export class BotInterferedPlacement extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasByBot(): boolean;
    clearByBot(): void;
    getByBot(): number | undefined;
    setByBot(value: number): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotInterferedPlacement.AsObject;
    static toObject(includeInstance: boolean, msg: BotInterferedPlacement): BotInterferedPlacement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotInterferedPlacement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotInterferedPlacement;
    static deserializeBinaryFromReader(message: BotInterferedPlacement, reader: jspb.BinaryReader): BotInterferedPlacement;
  }

  export namespace BotInterferedPlacement {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      byBot?: number,
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class MultipleCards extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultipleCards.AsObject;
    static toObject(includeInstance: boolean, msg: MultipleCards): MultipleCards.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultipleCards, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultipleCards;
    static deserializeBinaryFromReader(message: MultipleCards, reader: jspb.BinaryReader): MultipleCards;
  }

  export namespace MultipleCards {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class MultipleFouls extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultipleFouls.AsObject;
    static toObject(includeInstance: boolean, msg: MultipleFouls): MultipleFouls.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultipleFouls, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultipleFouls;
    static deserializeBinaryFromReader(message: MultipleFouls, reader: jspb.BinaryReader): MultipleFouls;
  }

  export namespace MultipleFouls {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class MultiplePlacementFailures extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiplePlacementFailures.AsObject;
    static toObject(includeInstance: boolean, msg: MultiplePlacementFailures): MultiplePlacementFailures.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiplePlacementFailures, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiplePlacementFailures;
    static deserializeBinaryFromReader(message: MultiplePlacementFailures, reader: jspb.BinaryReader): MultiplePlacementFailures;
  }

  export namespace MultiplePlacementFailures {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class KickTimeout extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): number | undefined;
    setTime(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KickTimeout.AsObject;
    static toObject(includeInstance: boolean, msg: KickTimeout): KickTimeout.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KickTimeout, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KickTimeout;
    static deserializeBinaryFromReader(message: KickTimeout, reader: jspb.BinaryReader): KickTimeout;
  }

  export namespace KickTimeout {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      location?: Common_pb.VectorF2D.AsObject,
      time?: number,
    }
  }

  export class NoProgressInGame extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): number | undefined;
    setTime(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoProgressInGame.AsObject;
    static toObject(includeInstance: boolean, msg: NoProgressInGame): NoProgressInGame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoProgressInGame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoProgressInGame;
    static deserializeBinaryFromReader(message: NoProgressInGame, reader: jspb.BinaryReader): NoProgressInGame;
  }

  export namespace NoProgressInGame {
    export type AsObject = {
      location?: Common_pb.VectorF2D.AsObject,
      time?: number,
    }
  }

  export class PlacementFailed extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasRemainingDistance(): boolean;
    clearRemainingDistance(): void;
    getRemainingDistance(): number | undefined;
    setRemainingDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementFailed.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementFailed): PlacementFailed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementFailed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementFailed;
    static deserializeBinaryFromReader(message: PlacementFailed, reader: jspb.BinaryReader): PlacementFailed;
  }

  export namespace PlacementFailed {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      remainingDistance?: number,
    }
  }

  export class UnsportingBehaviorMinor extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): string | undefined;
    setReason(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsportingBehaviorMinor.AsObject;
    static toObject(includeInstance: boolean, msg: UnsportingBehaviorMinor): UnsportingBehaviorMinor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsportingBehaviorMinor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsportingBehaviorMinor;
    static deserializeBinaryFromReader(message: UnsportingBehaviorMinor, reader: jspb.BinaryReader): UnsportingBehaviorMinor;
  }

  export namespace UnsportingBehaviorMinor {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      reason?: string,
    }
  }

  export class UnsportingBehaviorMajor extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): string | undefined;
    setReason(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnsportingBehaviorMajor.AsObject;
    static toObject(includeInstance: boolean, msg: UnsportingBehaviorMajor): UnsportingBehaviorMajor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnsportingBehaviorMajor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnsportingBehaviorMajor;
    static deserializeBinaryFromReader(message: UnsportingBehaviorMajor, reader: jspb.BinaryReader): UnsportingBehaviorMajor;
  }

  export namespace UnsportingBehaviorMajor {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      reason?: string,
    }
  }

  export class KeeperHeldBall extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): number | undefined;
    setDuration(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeeperHeldBall.AsObject;
    static toObject(includeInstance: boolean, msg: KeeperHeldBall): KeeperHeldBall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeeperHeldBall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeeperHeldBall;
    static deserializeBinaryFromReader(message: KeeperHeldBall, reader: jspb.BinaryReader): KeeperHeldBall;
  }

  export namespace KeeperHeldBall {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      location?: Common_pb.VectorF2D.AsObject,
      duration?: number,
    }
  }

  export class PlacementSucceeded extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasTimeTaken(): boolean;
    clearTimeTaken(): void;
    getTimeTaken(): number | undefined;
    setTimeTaken(value: number): void;

    hasPrecision(): boolean;
    clearPrecision(): void;
    getPrecision(): number | undefined;
    setPrecision(value: number): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): number | undefined;
    setDistance(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlacementSucceeded.AsObject;
    static toObject(includeInstance: boolean, msg: PlacementSucceeded): PlacementSucceeded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlacementSucceeded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlacementSucceeded;
    static deserializeBinaryFromReader(message: PlacementSucceeded, reader: jspb.BinaryReader): PlacementSucceeded;
  }

  export namespace PlacementSucceeded {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      timeTaken?: number,
      precision?: number,
      distance?: number,
    }
  }

  export class Prepared extends jspb.Message {
    hasTimeTaken(): boolean;
    clearTimeTaken(): void;
    getTimeTaken(): number | undefined;
    setTimeTaken(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prepared.AsObject;
    static toObject(includeInstance: boolean, msg: Prepared): Prepared.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prepared, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prepared;
    static deserializeBinaryFromReader(message: Prepared, reader: jspb.BinaryReader): Prepared;
  }

  export namespace Prepared {
    export type AsObject = {
      timeTaken?: number,
    }
  }

  export class BotSubstitution extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BotSubstitution.AsObject;
    static toObject(includeInstance: boolean, msg: BotSubstitution): BotSubstitution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BotSubstitution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BotSubstitution;
    static deserializeBinaryFromReader(message: BotSubstitution, reader: jspb.BinaryReader): BotSubstitution;
  }

  export namespace BotSubstitution {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class ChallengeFlag extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChallengeFlag.AsObject;
    static toObject(includeInstance: boolean, msg: ChallengeFlag): ChallengeFlag.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChallengeFlag, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChallengeFlag;
    static deserializeBinaryFromReader(message: ChallengeFlag, reader: jspb.BinaryReader): ChallengeFlag;
  }

  export namespace ChallengeFlag {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class EmergencyStop extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmergencyStop.AsObject;
    static toObject(includeInstance: boolean, msg: EmergencyStop): EmergencyStop.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmergencyStop, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmergencyStop;
    static deserializeBinaryFromReader(message: EmergencyStop, reader: jspb.BinaryReader): EmergencyStop;
  }

  export namespace EmergencyStop {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
    }
  }

  export class TooManyRobots extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasNumRobotsAllowed(): boolean;
    clearNumRobotsAllowed(): void;
    getNumRobotsAllowed(): number | undefined;
    setNumRobotsAllowed(value: number): void;

    hasNumRobotsOnField(): boolean;
    clearNumRobotsOnField(): void;
    getNumRobotsOnField(): number | undefined;
    setNumRobotsOnField(value: number): void;

    hasBallLocation(): boolean;
    clearBallLocation(): void;
    getBallLocation(): Common_pb.VectorF2D | undefined;
    setBallLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TooManyRobots.AsObject;
    static toObject(includeInstance: boolean, msg: TooManyRobots): TooManyRobots.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TooManyRobots, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TooManyRobots;
    static deserializeBinaryFromReader(message: TooManyRobots, reader: jspb.BinaryReader): TooManyRobots;
  }

  export namespace TooManyRobots {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      numRobotsAllowed?: number,
      numRobotsOnField?: number,
      ballLocation?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class BoundaryCrossing extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoundaryCrossing.AsObject;
    static toObject(includeInstance: boolean, msg: BoundaryCrossing): BoundaryCrossing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoundaryCrossing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoundaryCrossing;
    static deserializeBinaryFromReader(message: BoundaryCrossing, reader: jspb.BinaryReader): BoundaryCrossing;
  }

  export namespace BoundaryCrossing {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export class PenaltyKickFailed extends jspb.Message {
    hasByTeam(): boolean;
    clearByTeam(): void;
    getByTeam(): TeamMap[keyof TeamMap] | undefined;
    setByTeam(value: TeamMap[keyof TeamMap]): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Common_pb.VectorF2D | undefined;
    setLocation(value?: Common_pb.VectorF2D): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PenaltyKickFailed.AsObject;
    static toObject(includeInstance: boolean, msg: PenaltyKickFailed): PenaltyKickFailed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PenaltyKickFailed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PenaltyKickFailed;
    static deserializeBinaryFromReader(message: PenaltyKickFailed, reader: jspb.BinaryReader): PenaltyKickFailed;
  }

  export namespace PenaltyKickFailed {
    export type AsObject = {
      byTeam?: TeamMap[keyof TeamMap],
      location?: Common_pb.VectorF2D.AsObject,
    }
  }

  export interface TypeMap {
    UNKNOWN_GAME_EVENT_TYPE: 0;
    BALL_LEFT_FIELD_TOUCH_LINE: 6;
    BALL_LEFT_FIELD_GOAL_LINE: 7;
    AIMLESS_KICK: 11;
    ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA: 19;
    DEFENDER_IN_DEFENSE_AREA: 31;
    BOUNDARY_CROSSING: 41;
    KEEPER_HELD_BALL: 13;
    BOT_DRIBBLED_BALL_TOO_FAR: 17;
    BOT_PUSHED_BOT: 24;
    BOT_HELD_BALL_DELIBERATELY: 26;
    BOT_TIPPED_OVER: 27;
    ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA: 15;
    BOT_KICKED_BALL_TOO_FAST: 18;
    BOT_CRASH_UNIQUE: 22;
    BOT_CRASH_DRAWN: 21;
    DEFENDER_TOO_CLOSE_TO_KICK_POINT: 29;
    BOT_TOO_FAST_IN_STOP: 28;
    BOT_INTERFERED_PLACEMENT: 20;
    POSSIBLE_GOAL: 39;
    GOAL: 8;
    INVALID_GOAL: 42;
    ATTACKER_DOUBLE_TOUCHED_BALL: 14;
    PLACEMENT_SUCCEEDED: 5;
    PENALTY_KICK_FAILED: 43;
    NO_PROGRESS_IN_GAME: 2;
    PLACEMENT_FAILED: 3;
    MULTIPLE_CARDS: 32;
    MULTIPLE_FOULS: 34;
    BOT_SUBSTITUTION: 37;
    TOO_MANY_ROBOTS: 38;
    CHALLENGE_FLAG: 44;
    EMERGENCY_STOP: 45;
    UNSPORTING_BEHAVIOR_MINOR: 35;
    UNSPORTING_BEHAVIOR_MAJOR: 36;
    PREPARED: 1;
    INDIRECT_GOAL: 9;
    CHIPPED_GOAL: 10;
    KICK_TIMEOUT: 12;
    ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA: 16;
    ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED: 40;
    BOT_CRASH_UNIQUE_SKIPPED: 23;
    BOT_PUSHED_BOT_SKIPPED: 25;
    DEFENDER_IN_DEFENSE_AREA_PARTIALLY: 30;
    MULTIPLE_PLACEMENT_FAILURES: 33;
  }

  export const Type: TypeMap;

  export enum EventCase {
    EVENT_NOT_SET = 0,
    BALL_LEFT_FIELD_TOUCH_LINE = 6,
    BALL_LEFT_FIELD_GOAL_LINE = 7,
    AIMLESS_KICK = 11,
    ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA = 19,
    DEFENDER_IN_DEFENSE_AREA = 31,
    BOUNDARY_CROSSING = 43,
    KEEPER_HELD_BALL = 13,
    BOT_DRIBBLED_BALL_TOO_FAR = 17,
    BOT_PUSHED_BOT = 24,
    BOT_HELD_BALL_DELIBERATELY = 26,
    BOT_TIPPED_OVER = 27,
    ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA = 15,
    BOT_KICKED_BALL_TOO_FAST = 18,
    BOT_CRASH_UNIQUE = 22,
    BOT_CRASH_DRAWN = 21,
    DEFENDER_TOO_CLOSE_TO_KICK_POINT = 29,
    BOT_TOO_FAST_IN_STOP = 28,
    BOT_INTERFERED_PLACEMENT = 20,
    POSSIBLE_GOAL = 39,
    GOAL = 8,
    INVALID_GOAL = 44,
    ATTACKER_DOUBLE_TOUCHED_BALL = 14,
    PLACEMENT_SUCCEEDED = 5,
    PENALTY_KICK_FAILED = 45,
    NO_PROGRESS_IN_GAME = 2,
    PLACEMENT_FAILED = 3,
    MULTIPLE_CARDS = 32,
    MULTIPLE_FOULS = 34,
    BOT_SUBSTITUTION = 37,
    TOO_MANY_ROBOTS = 38,
    CHALLENGE_FLAG = 46,
    EMERGENCY_STOP = 47,
    UNSPORTING_BEHAVIOR_MINOR = 35,
    UNSPORTING_BEHAVIOR_MAJOR = 36,
    PREPARED = 1,
    INDIRECT_GOAL = 9,
    CHIPPED_GOAL = 10,
    KICK_TIMEOUT = 12,
    ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA = 16,
    ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED = 42,
    BOT_CRASH_UNIQUE_SKIPPED = 23,
    BOT_PUSHED_BOT_SKIPPED = 25,
    DEFENDER_IN_DEFENSE_AREA_PARTIALLY = 30,
    MULTIPLE_PLACEMENT_FAILURES = 33,
  }
}

export class Referee extends jspb.Message {
  hasPacketTimestamp(): boolean;
  clearPacketTimestamp(): void;
  getPacketTimestamp(): number | undefined;
  setPacketTimestamp(value: number): void;

  hasStage(): boolean;
  clearStage(): void;
  getStage(): Referee.StageMap[keyof Referee.StageMap] | undefined;
  setStage(value: Referee.StageMap[keyof Referee.StageMap]): void;

  hasStageTimeLeft(): boolean;
  clearStageTimeLeft(): void;
  getStageTimeLeft(): number | undefined;
  setStageTimeLeft(value: number): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): Referee.CommandMap[keyof Referee.CommandMap] | undefined;
  setCommand(value: Referee.CommandMap[keyof Referee.CommandMap]): void;

  hasCommandCounter(): boolean;
  clearCommandCounter(): void;
  getCommandCounter(): number | undefined;
  setCommandCounter(value: number): void;

  hasCommandTimestamp(): boolean;
  clearCommandTimestamp(): void;
  getCommandTimestamp(): number | undefined;
  setCommandTimestamp(value: number): void;

  hasYellow(): boolean;
  clearYellow(): void;
  getYellow(): Referee.TeamInfo;
  setYellow(value?: Referee.TeamInfo): void;

  hasBlue(): boolean;
  clearBlue(): void;
  getBlue(): Referee.TeamInfo;
  setBlue(value?: Referee.TeamInfo): void;

  hasDesignatedPosition(): boolean;
  clearDesignatedPosition(): void;
  getDesignatedPosition(): Common_pb.VectorF2D | undefined;
  setDesignatedPosition(value?: Common_pb.VectorF2D): void;

  hasBlueTeamOnPositiveHalf(): boolean;
  clearBlueTeamOnPositiveHalf(): void;
  getBlueTeamOnPositiveHalf(): boolean | undefined;
  setBlueTeamOnPositiveHalf(value: boolean): void;

  hasNextCommand(): boolean;
  clearNextCommand(): void;
  getNextCommand(): Referee.CommandMap[keyof Referee.CommandMap] | undefined;
  setNextCommand(value: Referee.CommandMap[keyof Referee.CommandMap]): void;

  clearGameEventsList(): void;
  getGameEventsList(): Array<GameEvent>;
  setGameEventsList(value: Array<GameEvent>): void;
  addGameEvents(value?: GameEvent, index?: number): GameEvent;

  clearGameEventProposalsList(): void;
  getGameEventProposalsList(): Array<GameEventProposalGroup>;
  setGameEventProposalsList(value: Array<GameEventProposalGroup>): void;
  addGameEventProposals(value?: GameEventProposalGroup, index?: number): GameEventProposalGroup;

  hasCurrentActionTimeRemaining(): boolean;
  clearCurrentActionTimeRemaining(): void;
  getCurrentActionTimeRemaining(): number | undefined;
  setCurrentActionTimeRemaining(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Referee.AsObject;
  static toObject(includeInstance: boolean, msg: Referee): Referee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Referee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Referee;
  static deserializeBinaryFromReader(message: Referee, reader: jspb.BinaryReader): Referee;
}

export namespace Referee {
  export type AsObject = {
    packetTimestamp?: number,
    stage?: Referee.StageMap[keyof Referee.StageMap],
    stageTimeLeft?: number,
    command?: Referee.CommandMap[keyof Referee.CommandMap],
    commandCounter?: number,
    commandTimestamp?: number,
    yellow: Referee.TeamInfo.AsObject,
    blue: Referee.TeamInfo.AsObject,
    designatedPosition?: Common_pb.VectorF2D.AsObject,
    blueTeamOnPositiveHalf?: boolean,
    nextCommand?: Referee.CommandMap[keyof Referee.CommandMap],
    gameEventsList: Array<GameEvent.AsObject>,
    gameEventProposalsList: Array<GameEventProposalGroup.AsObject>,
    currentActionTimeRemaining?: number,
  }

  export class TeamInfo extends jspb.Message {
    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): void;

    hasScore(): boolean;
    clearScore(): void;
    getScore(): number | undefined;
    setScore(value: number): void;

    hasRedCards(): boolean;
    clearRedCards(): void;
    getRedCards(): number | undefined;
    setRedCards(value: number): void;

    clearYellowCardTimesList(): void;
    getYellowCardTimesList(): Array<number>;
    setYellowCardTimesList(value: Array<number>): void;
    addYellowCardTimes(value: number, index?: number): number;

    hasYellowCards(): boolean;
    clearYellowCards(): void;
    getYellowCards(): number | undefined;
    setYellowCards(value: number): void;

    hasTimeouts(): boolean;
    clearTimeouts(): void;
    getTimeouts(): number | undefined;
    setTimeouts(value: number): void;

    hasTimeoutTime(): boolean;
    clearTimeoutTime(): void;
    getTimeoutTime(): number | undefined;
    setTimeoutTime(value: number): void;

    hasGoalkeeper(): boolean;
    clearGoalkeeper(): void;
    getGoalkeeper(): number | undefined;
    setGoalkeeper(value: number): void;

    hasFoulCounter(): boolean;
    clearFoulCounter(): void;
    getFoulCounter(): number | undefined;
    setFoulCounter(value: number): void;

    hasBallPlacementFailures(): boolean;
    clearBallPlacementFailures(): void;
    getBallPlacementFailures(): number | undefined;
    setBallPlacementFailures(value: number): void;

    hasCanPlaceBall(): boolean;
    clearCanPlaceBall(): void;
    getCanPlaceBall(): boolean | undefined;
    setCanPlaceBall(value: boolean): void;

    hasMaxAllowedBots(): boolean;
    clearMaxAllowedBots(): void;
    getMaxAllowedBots(): number | undefined;
    setMaxAllowedBots(value: number): void;

    hasBotSubstitutionIntent(): boolean;
    clearBotSubstitutionIntent(): void;
    getBotSubstitutionIntent(): boolean | undefined;
    setBotSubstitutionIntent(value: boolean): void;

    hasBallPlacementFailuresReached(): boolean;
    clearBallPlacementFailuresReached(): void;
    getBallPlacementFailuresReached(): boolean | undefined;
    setBallPlacementFailuresReached(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TeamInfo): TeamInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamInfo;
    static deserializeBinaryFromReader(message: TeamInfo, reader: jspb.BinaryReader): TeamInfo;
  }

  export namespace TeamInfo {
    export type AsObject = {
      name?: string,
      score?: number,
      redCards?: number,
      yellowCardTimesList: Array<number>,
      yellowCards?: number,
      timeouts?: number,
      timeoutTime?: number,
      goalkeeper?: number,
      foulCounter?: number,
      ballPlacementFailures?: number,
      canPlaceBall?: boolean,
      maxAllowedBots?: number,
      botSubstitutionIntent?: boolean,
      ballPlacementFailuresReached?: boolean,
    }
  }

  export interface StageMap {
    NORMAL_FIRST_HALF_PRE: 0;
    NORMAL_FIRST_HALF: 1;
    NORMAL_HALF_TIME: 2;
    NORMAL_SECOND_HALF_PRE: 3;
    NORMAL_SECOND_HALF: 4;
    EXTRA_TIME_BREAK: 5;
    EXTRA_FIRST_HALF_PRE: 6;
    EXTRA_FIRST_HALF: 7;
    EXTRA_HALF_TIME: 8;
    EXTRA_SECOND_HALF_PRE: 9;
    EXTRA_SECOND_HALF: 10;
    PENALTY_SHOOTOUT_BREAK: 11;
    PENALTY_SHOOTOUT: 12;
    POST_GAME: 13;
  }

  export const Stage: StageMap;

  export interface CommandMap {
    HALT: 0;
    STOP: 1;
    NORMAL_START: 2;
    FORCE_START: 3;
    PREPARE_KICKOFF_YELLOW: 4;
    PREPARE_KICKOFF_BLUE: 5;
    PREPARE_PENALTY_YELLOW: 6;
    PREPARE_PENALTY_BLUE: 7;
    DIRECT_FREE_YELLOW: 8;
    DIRECT_FREE_BLUE: 9;
    INDIRECT_FREE_YELLOW: 10;
    INDIRECT_FREE_BLUE: 11;
    TIMEOUT_YELLOW: 12;
    TIMEOUT_BLUE: 13;
    GOAL_YELLOW: 14;
    GOAL_BLUE: 15;
    BALL_PLACEMENT_YELLOW: 16;
    BALL_PLACEMENT_BLUE: 17;
  }

  export const Command: CommandMap;
}

export class GameEventProposalGroup extends jspb.Message {
  clearGameEventList(): void;
  getGameEventList(): Array<GameEvent>;
  setGameEventList(value: Array<GameEvent>): void;
  addGameEvent(value?: GameEvent, index?: number): GameEvent;

  hasAccepted(): boolean;
  clearAccepted(): void;
  getAccepted(): boolean | undefined;
  setAccepted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameEventProposalGroup.AsObject;
  static toObject(includeInstance: boolean, msg: GameEventProposalGroup): GameEventProposalGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GameEventProposalGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameEventProposalGroup;
  static deserializeBinaryFromReader(message: GameEventProposalGroup, reader: jspb.BinaryReader): GameEventProposalGroup;
}

export namespace GameEventProposalGroup {
  export type AsObject = {
    gameEventList: Array<GameEvent.AsObject>,
    accepted?: boolean,
  }
}

export interface TeamMap {
  UNKNOWN: 0;
  YELLOW: 1;
  BLUE: 2;
}

export const Team: TeamMap;

export interface DivisionMap {
  DIV_UNKNOWN: 0;
  DIV_A: 1;
  DIV_B: 2;
}

export const Division: DivisionMap;

