/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */

export interface TxParams {
  amount: string;
  code: string;
  data: string;
  gasLimit: string;
  gasPrice: string;
  nonce: number;
  priority: boolean;
  pubKey: string;
  signature?: string;
  toAddr: string;
  version?: number;
  from?: string;
  hash?: string;
}

export interface TransactionParams extends TxParams {
  ContractAddress?: string;
  senderAddress?: string;
  TranID?: string;
  ID?: string;
  receipt?: TransitionReceipt;
  Info?: string;
}

export interface ParamItem {
  type: string;
  value: string | unknown[];
  vname: string;
}

export interface DataParams {
  params: ParamItem[];
  _tag: string;
}

export interface Transition {
  accepted: boolean;
  addr: string;
  depth: number;
  msg: unknown
}

export interface TxEvent {
  address: string;
  params: ParamItem[];
  _eventname: string;
}

export interface TransitionReceipt {
  accepted: boolean;
  cumulative_gas: string;
  epoch_num: string;
  success: boolean;
  transitions: Transition[];
  event_logs?: TxEvent[];
  exceptions?: Array<number[]>;
  errors?: {
    line: number;
    message: string;
  }[];
}

export interface MessageParams {
  content: string;
  uuid: string;
  title: string;
  icon: string;
}
