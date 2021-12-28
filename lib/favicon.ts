/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */

const { document } = globalThis;

/**
 * Get the favicon from current tab.
 */
 export function getFavicon() {
  try {
    const found: any = document.querySelector('link[rel*=\'icon\']');
    return found['href'];
  } catch (err) {
    return null;
  }
}
