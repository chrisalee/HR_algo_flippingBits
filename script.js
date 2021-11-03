/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    const binary = n.toString(2).padStart(32,'0');
    let binaryFlip = '';
    let answer = 0;
    for(let i = 0; i < binary.length; i++) {
      if(parseInt(binary[i]) === 0) {
        binaryFlip +=1
      } else {
        binaryFlip +=0
      }
    }
    // console.log(binary, binaryFlip);
    for(let i = 0; i < binaryFlip.length; i++) {
      const expo = binaryFlip.length - 1 - i;
      answer +=(binaryFlip[i] * (2 ** expo))
    }
    console.log(answer);
    return answer;

}
