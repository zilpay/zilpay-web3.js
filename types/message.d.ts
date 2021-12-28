/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */

import type { InpageWallet } from "./account";
import type { TxBlock } from "./block";

export interface BodyPayload {
  uuid: string;
  reject?: string;
  resolve?: unknown;
  account?: InpageWallet;
  http?: string;
  netwrok?: string;
  isConnect?: boolean;
  isEnable?: boolean;
  node?: string;
  block?: TxBlock;
}

export interface ReqBody {
  type: string;
  payload?: BodyPayload;
  domain?: string;
  from?: string;
}
