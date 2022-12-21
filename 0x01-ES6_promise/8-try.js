/* Script that uses the throw and catch */

export default function divideFunction (numerator, denominator) {
  if (denominator <= 0) {
    throw Error('cannot divide by 0');
  }
  return (numerator / denominator);
}
