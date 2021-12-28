/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */
import { Handler } from './lib/handler';
import { ZilPay } from './lib/zilpay';

export const handler = Object.freeze(new Handler());
handler.initialized();
export const zilPay = Object.freeze(new ZilPay(handler.stream, handler.subject));
window['zilPay'] = zilPay;
