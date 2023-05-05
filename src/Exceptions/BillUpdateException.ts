import BitPayException from './BitPayException';

export class BillUpdateException implements BitPayException {
  public readonly message: string = 'An unexpected error occurred while trying to manage the bill';
  public readonly name: string = 'BITPAY-BILL-UPDATE';
  public readonly code: number = 114;
  public readonly stack: string;
  public readonly apiCode: string = '000000';

  /**
   * Construct the BillUpdateException.
   *
   * @param message string [optional] The Exception message to throw.
   * @param apiCode string [optional] The API Exception code to throw.
   */
  public constructor(message: string, apiCode = '000000') {
    this.message = message ? message : this.message;
    this.apiCode = apiCode ? apiCode : this.apiCode;
  }
}

export default BillUpdateException;
