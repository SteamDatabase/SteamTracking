async function _(_, _, ..._) {
  let _ = await fetch(_, {
      method: `POST`,
      body: JSON.stringify({
        _: _,
        _: _,
      }),
      headers: {
        [_]: `mutationAction`,
        "Content-Type": `application/json; charset=utf-8`,
      },
    }),
    { data: _, metrics: _ } = await _.json();
  if (_)
    try {
      window.SSR?.saveMetricsMetadata?.(_);
    } catch (_) {
      console.error(_);
    }
  if (!_._) throw _;
  return _;
}
async function _(_, _, ..._) {
  let _ = new URL(_, window.location.href);
  _.searchParams.set(`q`, _), _.searchParams.set(`qp`, JSON.stringify(_));
  let _ = await fetch(_, {
    headers: {
      [_]: `queryAction`,
    },
  });
  if (!_._) throw new _(_, _.status);
  let { data: _, metrics: _ } = await _.json();
  if (_)
    try {
      window.SSR?.saveMetricsMetadata?.(_);
    } catch (_) {
      console.error(_);
    }
  return _;
}
function _(_, ..._) {
  let _ = _.match(/(?:^|\/)(:[^/]+)/g);
  if (!_) return _;
  let _ = _;
  return (
    _.forEach((_, _) => {
      let _ = _[_];
      _.startsWith(`/`) && (_ = `/` + _), (_ = _.replace(_, _));
    }),
    _
  );
}
function _() {
  async function _(_, _, ..._) {
    return _(_, _, ..._);
  }
  async function _(_, _, ..._) {
    return _(_, _, ..._);
  }
  return {
    BuildRouteURL: _,
    FetchQueryAction: _,
    CallMutationAction: _,
    NavigateToRoute: _,
    RouteURL_t: ``,
  };
}
var {
  BuildRouteURL: _,
  CallMutationAction: _,
  FetchQueryAction: _,
  NavigateToRoute: _,
  RouteURL_t: _,
} = _();
export { _, _ };
