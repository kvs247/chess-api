export type PieceArray = Array<string | null>

export interface ParsedCastlingRights {
    whiteCanCastleShort: boolean;
    whiteCanCastleLong: boolean;
    blackCanCastleShort: boolean;
    blackCanCastleLong: boolean;
  }