import { helper, Formatter } from './helper';

export function consumer() {
  const result = helper();
  const formatter = new Formatter();
  return formatter.format(result);
}
