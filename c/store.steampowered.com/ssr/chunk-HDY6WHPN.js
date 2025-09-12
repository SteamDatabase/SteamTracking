var _ = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function _(_, _) {
  return (
    _.getFullYear() == _.getFullYear() &&
    _.getMonth() == _.getMonth() &&
    _.getDate() == _.getDate()
  );
}
function _() {
  return Math.floor(Date.now() / 1e3);
}
export { _, _, _ };
