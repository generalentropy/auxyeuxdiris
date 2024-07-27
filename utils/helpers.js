export function triggerFeedbackVibration(duration = 20) {
  if (navigator.vibrate) {
    navigator.vibrate(duration);
  } else {
    console.log("Vibration API not supported on this device/browser.");
  }
}

export function buildGpsLink(serviceName, location, destinationName) {
  const encodedName = encodeURIComponent(destinationName);
  switch (serviceName.toLowerCase()) {
    case "waze":
      return `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes&q=${encodedName}`;
    case "maps":
      return `https://www.google.com/maps/dir/?api=1&destination=${encodedName}&destination_place_id=${location.lat},${location.lng}`;
    case "plans":
      return `http://maps.apple.com/?daddr=${encodedName}&daddr=${location.lat},${location.lng}`;
    default:
      return "#";
  }
}
