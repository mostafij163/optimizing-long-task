export function formatTimestamp(ms) {
  const duration = Temporal.Duration.from({ milliseconds: Math.round(ms) }).round({
    largestUnit: "hour",
    smallestUnit: "millisecond",
  });

  const mm = String(duration.minutes).padStart(2, "0");
  const ss = String(duration.seconds).padStart(2, "0");
  const msStr = String(duration.milliseconds).padStart(3, "0");

  return `${mm}:${ss}:${msStr}`;
}
