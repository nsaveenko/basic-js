function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    let additionResult = '';
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionResult += j === additionRepeatTimes - 1 ? `${addition}`: `${addition}${additionSeparator}`;
    }
    result += i === repeatTimes - 1 ? `${str}${additionResult}` : `${str}${additionResult}${separator}`;
  }

  return result;
};

module.exports = repeater;
  