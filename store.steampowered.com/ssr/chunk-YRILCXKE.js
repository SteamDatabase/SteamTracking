var n = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function o(e, t) {
  return (
    e.getFullYear() == t.getFullYear() &&
    e.getMonth() == t.getMonth() &&
    e.getDate() == t.getDate()
  );
}
function r(e) {
  return new Promise((t) => setTimeout(t, e));
}
function a() {
  return Math.floor(Date.now() / 1e3);
}
export { n as a, o as b, r as c, a as d };
