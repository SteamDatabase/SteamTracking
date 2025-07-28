function _(..._) {
  return _.reduce(
    (_, _) =>
      _
        ? typeof _ == "string"
          ? _
            ? `${_} ${_}`
            : _
          : typeof _ == "object"
            ? _
              ? `${_} ${_(_)}`
              : _(_)
            : _
        : _,
    "",
  );
}
function _(_) {
  return Object.keys(_).reduce(
    (_, _) => (_[_] ? (_ ? `${_} ${_}` : _) : _),
    "",
  );
}
export { _ };
