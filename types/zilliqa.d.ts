/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */
import type { TxParams } from './transaction';

export type Params = TxParams[] | string[] | number[] | (string | string[] | number[])[];
export type NodeParams = string[] | Array<string[]>;

export interface SignedMessage {
  message: string;
  publicKey: string;
  signature: string;
}
