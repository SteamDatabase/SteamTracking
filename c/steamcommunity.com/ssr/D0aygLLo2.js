var _ = _(_()),
  _ = _(_()),
  _ = _();
function _(_) {
  let { active: _, children: _ } = _,
    _ = _() || _(window),
    _ = _(),
    [_, _] = _.useState(null),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  if (
    (_.useEffect(() => {
      if (_) {
        let _ = _.ShowPortalModal(),
          _ = _.OnElementReadyCallbacks.Register(_),
          _ = _.OnModalActiveCallbacks.Register(_);
        return (
          (_.current = _.key),
          () => {
            _(null), _(!1), _.Close(), _.Unregister(), _.Unregister();
          }
        );
      } else return;
    }, [_, _]),
    !_ || !_)
  )
    return null;
  let _ = _;
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        active: _,
        modalKey: _.current,
        children: _,
      })),
    _.createPortal(_, _)
  );
}
export { _ };
