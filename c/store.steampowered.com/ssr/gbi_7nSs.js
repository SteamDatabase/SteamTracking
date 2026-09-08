var _ = (_, _, _) => {
  let _ = _.lastIndexOf(`?`),
    _ = _[_ === -1 || _ < _.lastIndexOf(`/`) ? _ : _.slice(0, _)];
  return _
    ? typeof _ == `function`
      ? _()
      : Promise.resolve(_)
    : new Promise((_, _) => {
        (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
          _.bind(
            null,
            Error(
              `Unknown variable dynamic import: ` +
                _ +
                (_.split(`/`).length === _
                  ? ``
                  : `. Note that variables only represent file names one level deep.`),
            ),
          ),
        );
      });
};
_({
  enforceActions: `never`,
}),
  _();
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _, _, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/sales/sales_arabic.json": () =>
            _(() => import(`./D9haxWpY.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            _(() => import(`./DO4Yw4bJ2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            _(() => import(`./g6Cj2zNX2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            _(() => import(`./B1_D5AGj2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            _(() => import(`./cX3hY3da2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            _(() => import(`./DTh0RSj_2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            _(() => import(`./utGvctIL2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            _(() => import(`./Dsegl5Je2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            _(() => import(`./DJAg6s1v2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            _(() => import(`./Qn8KE9J52.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            _(() => import(`./BrDPuTXU2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            _(() => import(`./ndG7A_Tp2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            _(() => import(`./0yfNVupE2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            _(() => import(`./DM5BkH7q2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            _(() => import(`./C46STKzb2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            _(() => import(`./b1h1hZ__2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            _(() => import(`./BmKDlo6R2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            _(() => import(`./DTujhi8b2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            _(() => import(`./JAw1lu852.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            _(() => import(`./A_7CbQaB2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            _(() => import(`./Ct24eiWY2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            _(() => import(`./Chn961mF2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            _(() => import(`./CO04fdCc2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            _(() => import(`./C4xOMX5h2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            _(() => import(`./CBAT0BLB2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            _(() => import(`./BFEiSzz22.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            _(() => import(`./w6GlDEOO2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            _(() => import(`./BIoR9Drd.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            _(() => import(`./oZDQvv49.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            _(() => import(`./BBQzq5xn.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            _(() => import(`./CquFgDbG.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            _(() => import(`./B-xeza89.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${_}.json`,
        7,
      ),
      _(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            _(() => import(`./Ca0IZ7o8.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () => _(() => import(`./CDR24QgT.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () => _(() => import(`./WSRaicQ7.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            _(() => import(`./BP230Hx6.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            _(() => import(`./D5SisJZB.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            _(() => import(`./BItx-m69.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            _(() => import(`./Smtx6Czj.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            _(() => import(`./BTHqjYwp.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            _(() => import(`./j8xay5k3.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            _(() => import(`./l59Zb1gr.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            _(() => import(`./M0un-L99.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () => _(() => import(`./XRtw-lVB.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () => _(() => import(`./DvWkK_pP.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            _(() => import(`./CGCbxxwO.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () => _(() => import(`./BbHpitkn.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            _(() => import(`./DbWH5voi.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            _(() => import(`./Bi2kiPW1.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            _(() => import(`./7ASgoXVu.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () => _(() => import(`./B8kXBDYX.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            _(() => import(`./BejitO6F.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () => _(() => import(`./BcLakd6k.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () => _(() => import(`./DkxjZZBV.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            _(() => import(`./CeyReJr0.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () => _(() => import(`./D0BO-k0W.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () => _(() => import(`./6twok38K.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            _(() => import(`./BIt7zsic.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            _(() => import(`./ynnQrfp2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () => _(() => import(`./C_jjXkAR.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            _(() => import(`./DWQR6X3a.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            _(() => import(`./ClP361hT.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () => _(() => import(`./CO1wcFnp.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () => _(() => import(`./Dti23NBd.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${_}.json`,
        7,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/sales/sales_arabic.json": () =>
                _(() => import(`./D9haxWpY.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_brazilian.json": () =>
                _(() => import(`./DO4Yw4bJ2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_bulgarian.json": () =>
                _(() => import(`./g6Cj2zNX2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_czech.json": () =>
                _(() => import(`./B1_D5AGj2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_danish.json": () =>
                _(() => import(`./cX3hY3da2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_dutch.json": () =>
                _(() => import(`./DTh0RSj_2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_english.json": () =>
                _(() => import(`./utGvctIL2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_finnish.json": () =>
                _(() => import(`./Dsegl5Je2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_french.json": () =>
                _(() => import(`./DJAg6s1v2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_german.json": () =>
                _(() => import(`./Qn8KE9J52.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_greek.json": () =>
                _(() => import(`./BrDPuTXU2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_hungarian.json": () =>
                _(() => import(`./ndG7A_Tp2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_indonesian.json": () =>
                _(() => import(`./0yfNVupE2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_italian.json": () =>
                _(() => import(`./DM5BkH7q2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_japanese.json": () =>
                _(() => import(`./C46STKzb2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_koreana.json": () =>
                _(() => import(`./b1h1hZ__2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_latam.json": () =>
                _(() => import(`./BmKDlo6R2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_malay.json": () =>
                _(() => import(`./DTujhi8b2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_norwegian.json": () =>
                _(() => import(`./JAw1lu852.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_polish.json": () =>
                _(() => import(`./A_7CbQaB2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_portuguese.json": () =>
                _(() => import(`./Ct24eiWY2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_romanian.json": () =>
                _(() => import(`./Chn961mF2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_russian.json": () =>
                _(() => import(`./CO04fdCc2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_sc_schinese.json": () =>
                _(() => import(`./C4xOMX5h2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_schinese.json": () =>
                _(() => import(`./CBAT0BLB2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_spanish.json": () =>
                _(() => import(`./BFEiSzz22.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_swedish.json": () =>
                _(() => import(`./w6GlDEOO2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_tchinese.json": () =>
                _(() => import(`./BIoR9Drd.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_thai.json": () =>
                _(() => import(`./oZDQvv49.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_turkish.json": () =>
                _(() => import(`./BBQzq5xn.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_ukrainian.json": () =>
                _(() => import(`./CquFgDbG.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_vietnamese.json": () =>
                _(() => import(`./B-xeza89.js`), [], import.meta.url),
            }),
            `../../../shared/localization/sales/sales_${_}.json`,
            7,
          ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/marketing/marketing_arabic.json":
                () => _(() => import(`./Ca0IZ7o8.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_brazilian.json":
                () => _(() => import(`./CDR24QgT.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_bulgarian.json":
                () => _(() => import(`./WSRaicQ7.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_czech.json":
                () => _(() => import(`./BP230Hx6.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_danish.json":
                () => _(() => import(`./D5SisJZB.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_dutch.json":
                () => _(() => import(`./BItx-m69.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_english.json":
                () => _(() => import(`./Smtx6Czj.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_finnish.json":
                () => _(() => import(`./BTHqjYwp.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_french.json":
                () => _(() => import(`./j8xay5k3.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_german.json":
                () => _(() => import(`./l59Zb1gr.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_greek.json":
                () => _(() => import(`./M0un-L99.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_hungarian.json":
                () => _(() => import(`./XRtw-lVB.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_indonesian.json":
                () => _(() => import(`./DvWkK_pP.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_italian.json":
                () => _(() => import(`./CGCbxxwO.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_japanese.json":
                () => _(() => import(`./BbHpitkn.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_koreana.json":
                () => _(() => import(`./DbWH5voi.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_latam.json":
                () => _(() => import(`./Bi2kiPW1.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_malay.json":
                () => _(() => import(`./7ASgoXVu.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_norwegian.json":
                () => _(() => import(`./B8kXBDYX.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_polish.json":
                () => _(() => import(`./BejitO6F.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_portuguese.json":
                () => _(() => import(`./BcLakd6k.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_romanian.json":
                () => _(() => import(`./DkxjZZBV.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_russian.json":
                () => _(() => import(`./CeyReJr0.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_sc_schinese.json":
                () => _(() => import(`./D0BO-k0W.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_schinese.json":
                () => _(() => import(`./6twok38K.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_spanish.json":
                () => _(() => import(`./BIt7zsic.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_swedish.json":
                () => _(() => import(`./ynnQrfp2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_tchinese.json":
                () => _(() => import(`./C_jjXkAR.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_thai.json":
                () => _(() => import(`./DWQR6X3a.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_turkish.json":
                () => _(() => import(`./ClP361hT.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_ukrainian.json":
                () => _(() => import(`./CO1wcFnp.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_vietnamese.json":
                () => _(() => import(`./Dti23NBd.js`), [], import.meta.url),
            }),
            `../../../shared/localization/marketing/marketing_${_}.json`,
            7,
          ),
      _.Ready(),
    ]);
  _.AddTokens(
    {
      ..._,
      ..._,
    },
    {
      ..._,
      ..._,
    },
  );
}
_(_().strLanguage).finally(_);
