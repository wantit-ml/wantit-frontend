export type Currency = 'rub' | 'usd' | 'eur';

export const mapCurrencyToText: Record<Currency, string> = {
  rub: 'рублей',
  usd: 'долларов',
  eur: 'евро',
};
