const sc = require("./simonCipher");


test('Perform the Simon block function', () => {
    expect(sc.simonBox("1010100000", "1010100000")).toBe("0001010101");
  });

test('circular left shift', () => {
    expect(sc.leftCircularShift("10101000000", 3)).toBe("01000000101");
  }); 
  
test('circular left shift when value is greater than string length', () => {
    expect(sc.leftCircularShift("10101000000", 30)).toBe("01000000101");
  }); 

test('bitwise AND two values', () => {
    expect(sc.bitwiseAND("1010101010", "1111100000")).toBe("1010100000");
  }); 

test('bitwise XOR two values', () => {
    expect(sc.bitwiseXOR("1010101010", "1111100000")).toBe("0101001010");
  }); 