export function triggerFeedbackVibration(duration = 20) {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  } else {
    console.log("Vibration API not supported on this device/browser.");
  }
}
