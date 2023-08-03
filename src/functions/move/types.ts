export interface ProcessMoveRequest {
  fen: string;
  fromIndex: number;
  toIndex: number;
}

export interface ParsedFEN {
  piecePlacement: string;
  activeColor: string;
  castlingRights: string;
  enPassantTarget: string;
  halfmoveClock: string;
  fullmoveClock: string;
}