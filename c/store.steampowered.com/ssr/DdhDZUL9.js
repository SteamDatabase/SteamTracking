function _(_, _) {
  return (..._) => {
    let _ = new URL(location.href);
    return _(_.pathname + _.search + _.hash, {
      routeID: _,
      action: _,
      data: _,
    });
  };
}
export {
  _ as ClientReactInit,
  _ as FetchAction,
  _ as FetchLoader,
  _ as FetchLoaders,
  _ as FetchRouteData,
  _ as GetErrorReportingTags,
  _ as MakeClientAction,
  _ as NavigateToRoute,
  _ as useClientSideNavigation,
};
