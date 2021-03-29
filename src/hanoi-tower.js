function calculateHanoi(disksNumber, turnsSpeed) {
  const iterations = Math.pow(2, disksNumber) - 1;
  const turnsPerSecond = 3600 / turnsSpeed;
  const totalTime = Math.floor(iterations * turnsPerSecond);

  return {
    turns: iterations,
    seconds: totalTime
  }
};

module.exports = calculateHanoi;
