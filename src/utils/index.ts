export default {
  /**
   * @dec is Array
   */
  isArray(o: any) {
    return Object.prototype.toString.call(o) === '[object Array]'
  }
}
