import { Currency } from '../../Currency';
import BitPayException from '../../Exceptions/BitPayException';
import { Buyer } from './Buyer';
import { InvoiceBuyerProvidedInfo } from './InvoiceBuyerProvidedInfo';
import { InvoiceTransaction } from './InvoiceTransaction';
import { MinerFees } from './MinerFees';
import { Shopper } from './Shopper';
import { RefundInfo } from './RefundInfo';
import { SupportedTransactionCurrencies } from './SupportedTransactionCurrencies';
import { InvoiceUniversalCodes } from './InvoiceUniversalCodes';

export interface InvoiceInterface {
  // API fields
  // Required fields

  currency: string | null;
  guid: string | null;
  token: string | null;

  // Optional fields

  price: number | null;
  posData: string | null;
  notificationURL: string | null;
  transactionSpeed: string | null;
  fullNotifications: boolean | null;
  notificationEmail: string | null;
  redirectURL: string | null;
  closeURL: string | null;
  orderId: string | null;
  itemDesc: string | null;
  itemCode: string | null;
  physical: boolean | null;
  paymentCurrencies: string[] | [];
  acceptanceWindow: number | null;
  autoRedirect: boolean | null;
  forcedBuyerSelectedWallet: string | null;
  forcedBuyerSelectedTransactionCurrency: string | null;

  // Buyer data

  buyer: Buyer | null;

  // Response fields

  id: string | null;
  url: string | null;
  status: string | null;
  lowFeeDetected: boolean | null;
  invoiceTime: number | null;
  expirationTime: number | null;
  currentTime: number | null;
  exceptionStatus: string | null;
  targetConfirmations: number | null;
  transactions: InvoiceTransaction | null;
  refundAddresses: unknown | null;
  refundAddressRequestPending: boolean | null;
  buyerProvidedEmail: string | null;
  buyerProvidedInfo: InvoiceBuyerProvidedInfo | null;
  supportedTransactionCurrencies: SupportedTransactionCurrencies | null;
  minerFees: MinerFees | null;
  shopper: Shopper | null;
  billId: string | null;
  refundInfo: RefundInfo | null;
  extendedNotifications: boolean | null;
  transactionCurrency: string | null;
  amountPaid: number | null;
  displayAmountPaid: number | null;
  exchangeRates: Array<[string, Array<[string, number]>]> | null;
  paymentSubtotals: Array<[string, number]> | null;
  paymentTotals: Array<[string, number]> | null;
  paymentDisplayTotals: Array<[string, number]> | null;
  paymentDisplaySubTotals: Array<[string, number]> | null;
  nonPayProPaymentReceived: boolean | null;
  jsonPayProRequired: boolean | null;
  merchantName: string | null;
  bitpayIdRequired: boolean | null;
  underpaidAmount: number | null;
  overpaidAmount: number | null;
  paymentCodes: Array<[string, Array<[string, number]>]> | null;
  isCancelled: boolean | null;
  universalCodes: InvoiceUniversalCodes | null;

  setCurrency(_currency: string): void;
}

export class Invoice implements InvoiceInterface {
  // API fields

  // Required fields

  currency: string | null;
  guid: string | null;
  token: string | null;

  // Optional fields

  price: number | null;
  posData: string | null;
  notificationURL: string | null;
  transactionSpeed: string | null;
  fullNotifications: boolean | null;
  notificationEmail: string | null;
  redirectURL: string | null;
  closeURL: string | null;
  orderId: string | null;
  itemDesc: string | null;
  itemCode: string | null;
  physical: boolean | null;
  paymentCurrencies: string[] | [];
  acceptanceWindow: number | null;
  autoRedirect: boolean | null;
  forcedBuyerSelectedWallet: string | null;
  forcedBuyerSelectedTransactionCurrency: string | null;

  // Buyer data

  buyer: Buyer | null;

  // Response fields

  id: string | null;
  url: string | null;
  status: string | null;
  lowFeeDetected: boolean | null;
  invoiceTime: number | null;
  expirationTime: number | null;
  currentTime: number | null;
  exceptionStatus: string | null;
  targetConfirmations: number | null;
  transactions: InvoiceTransaction | null;
  refundAddresses: unknown | null;
  refundAddressRequestPending: boolean | null;
  buyerProvidedEmail: string | null;
  buyerProvidedInfo: InvoiceBuyerProvidedInfo | null;
  supportedTransactionCurrencies: SupportedTransactionCurrencies | null;
  minerFees: MinerFees | null;
  shopper: Shopper | null;
  billId: string | null;
  refundInfo: RefundInfo | null;
  extendedNotifications: boolean | null;
  transactionCurrency: string | null;
  amountPaid: number | null;
  displayAmountPaid: number | null;
  exchangeRates: Array<[string, Array<[string, number]>]> | null;
  paymentSubtotals: Array<[string, number]> | null;
  paymentTotals: Array<[string, number]> | null;
  paymentDisplayTotals: Array<[string, number]> | null;
  paymentDisplaySubTotals: Array<[string, number]> | null;
  nonPayProPaymentReceived: boolean | null;
  jsonPayProRequired: boolean | null;
  merchantName: string | null;
  bitpayIdRequired: boolean | null;
  underpaidAmount: number | null;
  overpaidAmount: number | null;
  paymentCodes: Array<[string, Array<[string, number]>]> | null;
  isCancelled: boolean | null;
  universalCodes: InvoiceUniversalCodes | null;

  /**
   * Constructor, create a minimal request Invoice object.
   *
   * @param price    The amount for which the invoice will be created.
   * @param currency The three digit currency type used to compute the invoice bitcoin amount.
   */
  public constructor(price: number, currency: string) {
    this.price = price;
    this.setCurrency(currency);
  }

  setCurrency(_currency: string) {
    if (!Currency.isValid(_currency))
      throw new BitPayException(null, 'Error: currency code must be a type of Model.Currency', null);

    this.currency = _currency;
  }
}
