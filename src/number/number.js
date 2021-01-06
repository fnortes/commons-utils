export const leftPad = (pad, length = 2, char = "0") => {
  if (pad !== undefined && pad !== null) {
    pad = pad + "";

    return pad.length >= length
      ? pad
      : new Array(length - pad.length + 1).join(char) + pad;
  }

  return null;
};

const number = {
  leftPad,
};

export default number;
