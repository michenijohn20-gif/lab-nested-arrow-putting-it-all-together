function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3; 
  return (passwordAttempt) => {
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts.";
    }
    attemptCount++;
    if (passwordAttempt === userInfo.password) {
      return `Login successful!`;
    } else {
      if (attemptCount >= maxAttempts) {
        return "Account locked due to too many failed login attempts";
      }
      return `Login failed.`;
    }
  };
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};