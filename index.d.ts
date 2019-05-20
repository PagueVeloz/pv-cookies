declare module "pv-cookies" {
  /**
   * Write / Rewrite cookie
   *
   * @param name Key of cookie
   * @param value Value to be saved
   * @param date *Optional*, expiration date
   */
  function setCookie(name: string, value: any, date?: Date): void

  /**
   * Leitura de cookie
   *
   * @param name Key of cookie
   */
  function readCookie(name: string): any

  /**
   * Remoção de cookie
   *
   * @param name Cookie key to be deleted
   */
  function deleteCookie(name: string): void
}
