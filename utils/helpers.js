export function triggerFeedbackVibration(duration = 20) {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  } else {
    console.log("Vibration API not supported on this device/browser.");
  }
}

export function buildGpsLink(name, location) {
  switch (name.toLowerCase()) {
    case "waze":
      return `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`;
    case "maps":
      return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    case "plans":
      return `http://maps.apple.com/?daddr=${location.lat},${location.lng}`;
    default:
      return "#";
  }
}

export function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}
