export default function leftPadZero(number, targetLength) {
  let output = `${number}`;
  while (output.length < targetLength) {
    output = `0${output}`;
  }
  return output;
}
