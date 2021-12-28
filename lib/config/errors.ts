/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */

export enum ErrorMessages {
  RequiredParam = 'is required.',
  Base16NotValid = 'is not a valid base 16 address.',
  ShouldBeNumber = 'should be number',
  CannotConvertBytes = 'Could not convert byte Buffer to 5-bit Buffer.',
  InvalidBech32 = 'Invalid bech32 address.',
  ExpectedHRP = 'Expected hrp to be zil.',
  Disabled = 'ZilPay is disabled.',
  Connect = 'User is\'t connections.',
  Rejected = 'Rejected by user',
  MustBeObject = 'Must be object.',
  MustBeString = 'Must be string.'
}
