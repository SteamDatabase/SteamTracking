const CLSTAMP = 9747952;

function n(...r) {
  return r.reduce(
    (i, e) =>
      e
        ? typeof e == "string"
          ? i
            ? `${i} ${e}`
            : e
          : typeof e == "object"
            ? i
              ? `${i} ${t(e)}`
              : t(e)
            : i
        : i,
    "",
  );
}
function t(r) {
  return Object.keys(r).reduce(
    (i, e) => (r[e] ? (i ? `${i} ${e}` : e) : i),
    "",
  );
}
export { n as a };
