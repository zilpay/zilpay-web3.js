/*
 * Project: ZilPay-wallet
 * Author: Rinat(hiccaru)
 * -----
 * Modified By: the developer formerly known as Rinat(hiccaru) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2021 ZilPay
 */

import type { ReqBody } from 'types/message';
import { MTypeTabContent } from './stream-keys';

const { document, window } = globalThis;

export interface CustomEvent extends Event {
  detail: string;
}

/**
 * Used for communication between a web page and an extension's content script.
 */
 export class TabStream {

  readonly #eventName: string;

  /**
   * Creates a new TabStream.
   * @param {String} eventName - Event type.
   */
  constructor(eventName: string) {
    this.#eventName = eventName
  }

  /**
   * Message listener that returns decrypted messages when synced
   */
  public listen(cb: (payload: ReqBody) => void) {
    document.addEventListener(this.#eventName, (event: CustomEvent) => {
      const detail = event.detail;

      if (detail) {
        cb(JSON.parse(detail));
      }
    }, false);
    window.addEventListener(this.#eventName, (event: CustomEvent) => {
      const detail = event.detail;

      if (detail) {
        cb(JSON.parse(detail));
      }
    }, false);
  }

  /**
   * Message sender which encrypts messages and adds the sender.
   * @param data - The payload to send.
   * @param to - The stream to send messages to.
   */
  public send(data: ReqBody, to: string) {
    data.from = this.#eventName;

    if (Object.values(MTypeTabContent).includes(to)) {
      this.#dispatch(JSON.stringify(data), to);
    }
  }

  #dispatch(data: string, to: string) {
    const mobile = globalThis['ReactNativeWebView'];

    try {
      if (mobile) {
        mobile.postMessage(data);
      } else {
        document.dispatchEvent(this.#getEvent(data, to));
      }
    } catch {
      window.location.reload();
    }
  }

  /**
   * Helper methods for building and sending events.
   */
  #getEventInit(detail: string) {
    return {
      detail
    };
  }

  /**
 * No modifly data
 * @param encryptedData - No modifly data
 * @param to - Event name.
 */
 #getEvent(detail: string, to: string) {
    return new CustomEvent(to, this.#getEventInit(detail));
  }
}
