export const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.abs(now - date);

  const units = [
    { name: "year", millis: 365 * 24 * 60 * 60 * 1000 },
    { name: "month", millis: 30 * 24 * 60 * 60 * 1000 },
    { name: "week", millis: 7 * 24 * 60 * 60 * 1000 },
    { name: "day", millis: 24 * 60 * 60 * 1000 },
    { name: "hour", millis: 60 * 60 * 1000 },
    { name: "minute", millis: 60 * 1000 },
    { name: "second", millis: 1000 },
  ];

  for (const unit of units) {
    const value = Math.floor(diff / unit.millis);
    if (value >= 1) {
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
