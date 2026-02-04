import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
function _(_) {
  let { queryClient: _ = _, steamUI: _ } = _;
  _.useEffect(() => {
    _ == _ &&
      _.setDefaultOptions({
        ..._,
        queries: {
          ..._.queries,
          networkMode: _ ? "offlineFirst" : void 0,
        },
        mutations: {
          ..._.mutations,
          networkMode: _ ? "offlineFirst" : void 0,
        },
      });
  }, [_, _]);
  let _ = _.children;
  return (
    _.debug &&
      (_ = [
        ..._.Children.toArray(_),
        _.createElement(_, {
          key: "ReactQueryDevtools",
        }),
      ]),
    _.createElement(
      _,
      {
        client: _,
      },
      _,
    )
  );
}
var _ = {
    queries: {
      staleTime: 1 / 0,
    },
  },
  _ = new _({
    defaultOptions: _,
  });
export { _ };
