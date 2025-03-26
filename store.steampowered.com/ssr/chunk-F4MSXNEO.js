const CLSTAMP = 9632766;

import { a as l, c as u } from "./chunk-22AQQJVE.js";
import { a as f } from "./chunk-3I3KBY56.js";
import { d as s } from "./chunk-BDMPFFNE.js";
var a = function () {
  return null;
};
var e = s(f());
function m(o) {
  let { queryClient: t = c, steamUI: i } = o;
  e.useEffect(() => {
    t == c &&
      t.setDefaultOptions({
        ...n,
        queries: { ...n.queries, networkMode: i ? "offlineFirst" : void 0 },
      });
  }, [t, i]);
  let r = o.children;
  return (
    o.debug &&
      (r = [
        ...e.Children.toArray(r),
        e.createElement(a, { key: "ReactQueryDevtools" }),
      ]),
    e.createElement(u, { client: t }, r)
  );
}
var n = { queries: { staleTime: 1 / 0 } },
  c = new l({ defaultOptions: n });
export { a, m as b };
