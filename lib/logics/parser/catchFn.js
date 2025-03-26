const catchFn = (msg) => {
  let format = /tikamHalus/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `catch`,
    closeGroup: true,
    openGroup: true,
  };
};

module.exports = catchFn;
