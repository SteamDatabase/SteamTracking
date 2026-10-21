/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Bt as t,
  E as n,
  S as r,
  Wt as i,
  Y as a,
  gt as o,
  it as s,
  k as c,
  q as l,
  qt as u,
  ut as d,
  x as f,
} from "./mobx.esm.js?contenthash=CuqnC1HA";
import {
  At as p,
  Bo as m,
  Er as ee,
  Ht as te,
  Qr as ne,
  Zi as re,
  rn as ie,
  sa as h,
  yn as ae,
} from "./dialogs.js?contenthash=Ef6x5QZW";
import { w as g } from "./long.js?contenthash=BCeVig72";
import { C as oe, E as se } from "./react-router.js?contenthash=BY_BIsGq";
import {
  n as ce,
  t as le,
} from "./csstransitionwrapper.js?contenthash=CnrFdwNo";
import { t as ue } from "./axios.js?contenthash=BJ1Ik0cP";
import { t as de } from "./throbber.js?contenthash=DT0j8i1L";
import { t as fe } from "./multisourceimage.js?contenthash=BBHUSgPz";
import { t as pe } from "./canvas.js?contenthash=Bf7603mp";
var me = `UpperLeft`,
  he = `BottomLeft`,
  ge = `UpperCenter`,
  _e = `CenterCenter`,
  ve = `BottomCenter`,
  _ = u(o()),
  ye = u(se()),
  be = u(p()),
  xe = u(ue()),
  v = i({
    AddBoxSizer: () => He,
    Background: () => Ee,
    Bottom: () => Be,
    BottomCenter: () => N,
    BottomLeft: () => P,
    BottomRight: () => Ve,
    BoxSizer: () => L,
    BoxSizerButtonContainer: () => We,
    BoxSizerContainer: () => I,
    BoxSizerDelete: () => Le,
    BoxSizerDragBox: () => R,
    BoxSizerEdge: () => x,
    BoxSizerGridBox: () => z,
    BoxSizerInfo: () => Ke,
    BoxSizerSettings: () => Re,
    BoxSizerValidRegion: () => C,
    CenterCenter: () => M,
    DialogButton: () => Ge,
    EdgeDown: () => Pe,
    FallbackArt: () => Te,
    Features: () => Ye,
    FullscreenEnterActive: () => T,
    FullscreenEnterDone: () => O,
    FullscreenEnterStart: () => w,
    FullscreenExitActive: () => E,
    FullscreenExitDone: () => D,
    FullscreenExitStart: () => k,
    HeaderBackgroundImage: () => Ae,
    Hidden: () => Ne,
    ImgBlur: () => Me,
    ImgBlurBackdrop: () => je,
    ImgContainer: () => b,
    ImgSrc: () => we,
    Left: () => Ie,
    Loaded: () => Oe,
    Middle: () => S,
    NoArt: () => Ce,
    PinBox: () => F,
    Right: () => ze,
    SVGTitle: () => H,
    SaveBoxSizer: () => Ue,
    TextNameSpace: () => qe,
    TitleImageContainer: () => A,
    TitleLogo: () => De,
    TitleSection: () => Je,
    Top: () => V,
    TopCapsule: () => y,
    TopGradient: () => Xe,
    TopLeft: () => B,
    TopRight: () => Fe,
    UpperCenter: () => j,
    UpperLeft: () => ke,
    default: () => Ze,
    "duration-app-launch": () => Se,
  }),
  Se = `800ms`,
  y = `i9KcRmbfbvg-`,
  Ce = `c8uauX6-os0-`,
  we = `oAbYPcN6xMk-`,
  b = `_1SO3fzpXZMg-`,
  Te = `MPvvDvGTX4E-`,
  x = `qugr6Zt0UpU-`,
  S = `rotRuUkbxFk-`,
  C = `nE-LwRJzvNM-`,
  Ee = `B-kJ5tyfqxc-`,
  w = `TsklQsuuuH0-`,
  T = `i9nCLUP83y4-`,
  E = `Y8NCjbBXuK4-`,
  D = `DII4zPcGweo-`,
  O = `h5Ihk5Z6UJM-`,
  k = `N7OpGIp-XYQ-`,
  A = `hNHwGI-JZlg-`,
  j = `-gpYK65-PO8-`,
  M = `_1tt49wVUYGo-`,
  N = `lc-HOHVK5w8-`,
  De = `MDlRNe2WCnA-`,
  Oe = `MP7DM-J-SM4-`,
  P = `-Es6N1qaYoU-`,
  ke = `RDOYLMLdjVY-`,
  Ae = `rzNYjeGJ-u8-`,
  je = `ArI6ZTmOyrU-`,
  Me = `EqH7klwhYE0-`,
  Ne = `EQ-825XS0V4-`,
  F = `EmNTtllgxMI-`,
  I = `C-aKiFBaz1Q-`,
  L = `qmSsmzf9b4E-`,
  R = `jtN5LA-jzD8-`,
  Pe = `PIhA-Ktj63o-`,
  z = `KH5XNXoWh7U-`,
  B = `_4RGLcD-ArfM-`,
  V = `b5wAq2zSbDc-`,
  Fe = `Mw0yGs5oSLU-`,
  Ie = `xspvMGB5joQ-`,
  Le = `UMKKmuRdYWA-`,
  Re = `ogQSspF5HQk-`,
  ze = `jyaV-ixSN5g-`,
  Be = `VJbyEhOgKD8-`,
  Ve = `_05YGjnOccl4-`,
  He = `Cjoh4St2zts-`,
  Ue = `eMqdLgUR0-o-`,
  We = `-iZUXuLHieY-`,
  Ge = `v23YCbae3-M-`,
  Ke = `IAKrDVUwKA0-`,
  qe = `vFsfSZsB8Sg-`,
  Je = `jwmOqyEZJ3c-`,
  Ye = `f1Tpbhps2NE-`,
  H = `_6YJu921-BwU-`,
  Xe = `xfGCvZ43jJQ-`,
  Ze = {
    "duration-app-launch": `800ms`,
    TopCapsule: y,
    NoArt: Ce,
    ImgSrc: we,
    ImgContainer: b,
    FallbackArt: Te,
    BoxSizerEdge: x,
    Middle: S,
    BoxSizerValidRegion: C,
    Background: Ee,
    FullscreenEnterStart: w,
    FullscreenEnterActive: T,
    FullscreenExitActive: E,
    FullscreenExitDone: D,
    FullscreenEnterDone: O,
    FullscreenExitStart: k,
    TitleImageContainer: A,
    UpperCenter: j,
    CenterCenter: M,
    BottomCenter: N,
    TitleLogo: De,
    Loaded: Oe,
    BottomLeft: P,
    UpperLeft: ke,
    HeaderBackgroundImage: Ae,
    ImgBlurBackdrop: je,
    ImgBlur: Me,
    Hidden: Ne,
    PinBox: F,
    BoxSizerContainer: I,
    BoxSizer: L,
    BoxSizerDragBox: R,
    EdgeDown: Pe,
    BoxSizerGridBox: z,
    TopLeft: B,
    Top: V,
    TopRight: Fe,
    Left: Ie,
    BoxSizerDelete: Le,
    BoxSizerSettings: Re,
    Right: ze,
    Bottom: Be,
    BottomRight: Ve,
    AddBoxSizer: He,
    SaveBoxSizer: Ue,
    BoxSizerButtonContainer: We,
    DialogButton: Ge,
    BoxSizerInfo: Ke,
    TextNameSpace: qe,
    TitleSection: Je,
    Features: Ye,
    SVGTitle: H,
    TopGradient: Xe,
  },
  Qe = `800ms`,
  U = s(),
  W = {
    exit: k,
    exitActive: E,
    exitDone: D,
    enter: w,
    enterDone: O,
    enterActive: T,
  },
  G = ae(Qe),
  K = { pinnedPosition: he, nWidthPct: 50, nHeightPct: 50 },
  q = _.createContext({ bFullscreen: !1 }),
  J = class extends _.Component {
    m_refTopCapsule = _.createRef();
    constructor(e) {
      super(e), (this.state = { logoPosition: void 0 });
    }
    componentDidUpdate(e) {
      (e.appid != this.props.appid || e.editMode != this.props.editMode) &&
        this.setState({ logoPosition: void 0 });
    }
    get background_src() {
      return (
        this.m_refTopCapsule.current &&
        this.m_refTopCapsule.current.background_src
      );
    }
    get logo_src() {
      return (
        this.m_refTopCapsule.current && this.m_refTopCapsule.current.logo_src
      );
    }
    GetLogoPosition() {
      return this.state.logoPosition || this.props.logoPosition || K;
    }
    SetPinnedPosition(e) {
      this.setState(
        { logoPosition: { ...this.GetLogoPosition(), pinnedPosition: e } },
        this.PostPositionChangeCallback,
      );
    }
    SetDimensions(e, t) {
      this.setState(
        {
          logoPosition: {
            ...this.GetLogoPosition(),
            nWidthPct: e,
            nHeightPct: t,
          },
        },
        this.PostPositionChangeCallback,
      );
    }
    OnPositionChanged(e) {
      this.SetDimensions(e.nWidthPct, e.nHeightPct);
    }
    PostPositionChangeCallback() {
      this.props.fnOnPositionChanged &&
        this.props.fnOnPositionChanged(this.GetLogoPosition());
    }
    render() {
      if (!this.props.editMode)
        return (0, U.jsx)(q.Provider, {
          value: { bFullscreen: this.props.bFullscreen },
          children: (0, U.jsx)(Y, { ref: this.m_refTopCapsule, ...this.props }),
        });
      let { children: e, logoPosition: t, editMode: n, ...r } = this.props,
        i = this.GetLogoPosition();
      return (0, U.jsx)(q.Provider, {
        value: { bFullscreen: this.props.bFullscreen },
        children: (0, U.jsxs)(Y, {
          ref: this.m_refTopCapsule,
          ...r,
          editMode: !0,
          logoPosition: i,
          fnOnPositionChanged: this.OnPositionChanged,
          children: [
            (0, U.jsx)(`div`, {
              className: `${F} ${P}`,
              onClick: () => this.SetPinnedPosition(he),
              title: `Pin to Bottom Left`,
            }),
            (0, U.jsx)(`div`, {
              className: `${F} ${j}`,
              onClick: () => this.SetPinnedPosition(ge),
              title: `Pin to Top Center`,
            }),
            (0, U.jsx)(`div`, {
              className: `${F} ${M}`,
              onClick: () => this.SetPinnedPosition(_e),
              title: `Pin to Center`,
            }),
            (0, U.jsx)(`div`, {
              className: `${F} ${N}`,
              onClick: () => this.SetPinnedPosition(ve),
              title: `Pin to Bottom Center`,
            }),
            e,
          ],
        }),
      });
    }
  };
c([g], J.prototype, `SetDimensions`, null),
  c([g], J.prototype, `OnPositionChanged`, null),
  c([g], J.prototype, `PostPositionChangeCallback`, null);
var Y = class extends _.Component {
  m_refBackgroundImage = _.createRef();
  m_refLogoImage = _.createRef();
  constructor(e) {
    super(e),
      t(
        !e.editMode || e.rgLogoImages.length <= 1,
        `Can't use multiple logo images in edit mode`,
      ),
      (this.state = {
        bHasHeaderImage: e.rgHeaderImages.length > 0,
        bHasLogoImage: e.rgLogoImages.length > 0,
        bLogoLoaded: !1,
      });
  }
  componentDidUpdate(e) {
    let t = null;
    (JSON.stringify(e.rgHeaderImages) !=
      JSON.stringify(this.props.rgHeaderImages) ||
      JSON.stringify(e.rgBlurImages) !=
        JSON.stringify(this.props.rgBlurImages)) &&
      ((t ||= {}), (t.bHasHeaderImage = this.props.rgHeaderImages.length > 0)),
      JSON.stringify(e.rgLogoImages) !=
        JSON.stringify(this.props.rgLogoImages) &&
        ((t ||= {}),
        (t.bHasLogoImage = this.props.rgLogoImages.length > 0),
        (t.bLogoLoaded = !1)),
      t && this.setState(t);
  }
  OnHeaderError() {
    this.setState({ bHasHeaderImage: !1 }),
      this.props.fnOnLoaded && this.props.fnOnLoaded();
  }
  OnIncrementalLogoError(e, t, n) {
    this.props.fnReportLogoCacheMiss &&
      this.props.fnReportLogoCacheMiss(this.props.appid, t),
      this.props.fnOnLoaded && this.props.fnOnLoaded();
  }
  OnLogoError() {
    this.setState({ bHasLogoImage: !1 }, () => {
      this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
    });
  }
  OnLogoLoad() {
    this.setState({ bLogoLoaded: !0 }, () => {
      this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
    });
  }
  OnLoaded() {
    this.props.fnOnLoaded && this.props.fnOnLoaded();
  }
  get background_src() {
    return (
      this.state.bHasHeaderImage &&
      this.m_refBackgroundImage.current &&
      this.m_refBackgroundImage.current.src
    );
  }
  get logo_src() {
    return (
      this.state.bLogoLoaded &&
      this.m_refLogoImage.current?.imgRef?.current?.src
    );
  }
  render() {
    let {
        rgLogoImages: t,
        editMode: n,
        logoPosition: r,
        className: i,
        classNameNoLogo: a,
        fnOnPositionChanged: o,
        height: s,
      } = this.props,
      { bHasLogoImage: c } = this.state,
      l = this.props.rgHeaderImages.length == 1,
      u = e(
        y,
        i,
        !this.state.bHasHeaderImage && `c8uauX6-os0-`,
        (!this.props.hasHeroImage || l) && `MPvvDvGTX4E-`,
        !c && a,
      ),
      d = { "--header-height": s == null ? void 0 : s + `px` };
    return (0, U.jsx)(le, {
      timeout: G,
      appear: !0,
      in: this.props.bFullscreen,
      classNames: W,
      children: (i) =>
        (0, U.jsxs)(`div`, {
          ref: i,
          className: u,
          style: d,
          children: [
            (0, U.jsx)(X, {
              ref: this.m_refBackgroundImage,
              bLowPerfMode: this.props.bLowPerfMode,
              appid: this.props.appid,
              rgHeaderImages: this.props.rgHeaderImages,
              rgBlurImages: this.props.rgBlurImages,
              onReportHeroImageMiss: this.props.fnReportHeroImageMiss,
              onError: this.OnHeaderError,
              onLoad: this.OnLoaded,
            }),
            c &&
              r !== null &&
              (0, U.jsx)(
                $e,
                {
                  strLogoImageURL: t[0],
                  editMode: n,
                  logoPosition: r || K,
                  fnOnPositionChanged: n && o,
                  fullscreen: this.props.bFullscreen,
                  children: (0, U.jsx)(fe, {
                    ref: this.m_refLogoImage,
                    className: e(
                      `MDlRNe2WCnA-`,
                      this.state.bLogoLoaded && `MP7DM-J-SM4-`,
                    ),
                    rgSources: t,
                    onLoad: this.OnLogoLoad,
                    onIncrementalError: this.OnIncrementalLogoError,
                    onError: this.OnLogoError,
                  }),
                },
                t[0],
              ),
            this.props.children,
            (0, U.jsx)(`div`, { className: Xe }),
          ],
        }),
    });
  }
};
c([g], Y.prototype, `OnHeaderError`, null),
  c([g], Y.prototype, `OnIncrementalLogoError`, null),
  c([g], Y.prototype, `OnLogoError`, null),
  c([g], Y.prototype, `OnLogoLoad`, null),
  c([g], Y.prototype, `OnLoaded`, null),
  (Y = c([oe], Y));
var X = class extends _.Component {
  m_refBackgroundImage = _.createRef();
  m_refCanvasBlurImage;
  m_elBackgroundImage = null;
  constructor(e) {
    super(e),
      (this.state = {
        bBackgroundLoaded: !1,
        strLoadedBlurImage: null,
        nBlurImageIndex: 0,
        bUseCanvasBlur: !this.HasBlurImages(),
      });
  }
  componentDidMount() {
    !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad(),
      this.CheckForLoadedImage();
  }
  componentDidUpdate(e) {
    (e.appid != this.props.appid ||
      JSON.stringify(e.rgHeaderImages) !=
        JSON.stringify(this.props.rgHeaderImages) ||
      JSON.stringify(e.rgBlurImages) !=
        JSON.stringify(this.props.rgBlurImages) ||
      this.props.bLowPerfMode != e.bLowPerfMode) &&
      (this.setState({
        bBackgroundLoaded: !1,
        nBlurImageIndex: 0,
        bUseCanvasBlur: !this.HasBlurImages(),
      }),
      !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad(),
      (this.m_elBackgroundImage = null)),
      this.CheckForLoadedImage();
  }
  CheckForLoadedImage() {
    let e = this.m_refBackgroundImage.current?.imgRef.current ?? null;
    e !== this.m_elBackgroundImage &&
      ((this.m_elBackgroundImage = e),
      e?.complete && e.naturalWidth > 0 && this.ShowHeaderImage(e));
  }
  ShowHeaderImage(e) {
    (this.m_refCanvasBlurImage = e),
      this.setState((e) => ({
        bBackgroundLoaded: !0,
        bUseCanvasBlur:
          e.bUseCanvasBlur ||
          !this.HasBlurImages() ||
          !this.props.rgBlurImages[e.nBlurImageIndex],
      }));
  }
  get src() {
    return (
      this.m_refBackgroundImage.current &&
      this.m_refBackgroundImage.current?.imgRef.current?.src
    );
  }
  OnIncrementalError(e, t, n) {
    this.props.onReportHeroImageMiss &&
      this.props.onReportHeroImageMiss(this.props.appid, t),
      this.HasBlurImages() &&
        this.setState({ nBlurImageIndex: this.state.nBlurImageIndex + 1 });
  }
  OnHeaderLoad() {
    this.props.onLoad && this.props.onLoad(),
      this.state.bBackgroundLoaded ||
        (0, ye.flushSync)(() =>
          this.ShowHeaderImage(
            this.m_refBackgroundImage.current?.imgRef.current,
          ),
        );
  }
  OnBlurImageLoaded(e) {
    this.setState({ strLoadedBlurImage: e.currentTarget.getAttribute(`src`) });
  }
  OnBlurImageFailed() {
    this.setState({ bUseCanvasBlur: !0 });
  }
  HasHeaderImages() {
    let e = this.props.rgHeaderImages;
    return e && e.length > 0;
  }
  HasBlurImages() {
    let e = this.props.rgBlurImages;
    return e && e.length > 0;
  }
  render() {
    let t = this.HasBlurImages()
        ? this.props.rgBlurImages[this.state.nBlurImageIndex]
        : null,
      n = this.state.strLoadedBlurImage != t,
      r = null;
    return (
      (r = (0, U.jsxs)(_.Fragment, {
        children: [
          !this.state.bUseCanvasBlur &&
            this.state.bBackgroundLoaded &&
            this.props.rgBlurImages[this.state.nBlurImageIndex] &&
            (0, U.jsx)(`img`, {
              src: this.props.rgBlurImages[this.state.nBlurImageIndex],
              className: e(
                `oAbYPcN6xMk-`,
                `EqH7klwhYE0-`,
                `ArI6ZTmOyrU-`,
                n && `EQ-825XS0V4-`,
              ),
              onLoad: this.OnBlurImageLoaded,
              onError: this.OnBlurImageFailed,
            }),
          this.state.bUseCanvasBlur &&
            this.state.bBackgroundLoaded &&
            !this.props.bLowPerfMode &&
            (0, U.jsx)(pe, {
              className: e(`oAbYPcN6xMk-`, `EqH7klwhYE0-`, `ArI6ZTmOyrU-`),
              elementRef: this.m_refCanvasBlurImage,
              updateRate: 0,
              width: 192,
              height: 62,
              reductionFactor: 10,
              blurAmount: 3,
            }),
        ],
      })),
      (0, U.jsx)(q.Consumer, {
        children: (t) =>
          (0, U.jsx)(le, {
            timeout: G,
            appear: !0,
            in: t.bFullscreen,
            classNames: W,
            children: (t) =>
              (0, U.jsxs)(`div`, {
                ref: t,
                className: e(Ae, void 0),
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages[this.state.nBlurImageIndex] &&
                    (0, U.jsx)(`img`, {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: e(
                        `oAbYPcN6xMk-`,
                        `EqH7klwhYE0-`,
                        n && `EQ-825XS0V4-`,
                      ),
                      onLoad: this.OnBlurImageLoaded,
                      onError: this.OnBlurImageFailed,
                    }),
                  this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    !this.props.bLowPerfMode &&
                    (0, U.jsx)(pe, {
                      className: e(`oAbYPcN6xMk-`, `EqH7klwhYE0-`),
                      elementRef: this.m_refCanvasBlurImage,
                      updateRate: 0,
                      width: 192,
                      height: 62,
                      reductionFactor: 10,
                      blurAmount: 3,
                    }),
                  (0, U.jsx)(`div`, {
                    className: b,
                    children:
                      this.HasHeaderImages() &&
                      (0, U.jsx)(fe, {
                        ref: this.m_refBackgroundImage,
                        rgSources: this.props.rgHeaderImages,
                        className: e(
                          `oAbYPcN6xMk-`,
                          !this.state.bBackgroundLoaded && `EQ-825XS0V4-`,
                        ),
                        onLoad: this.OnHeaderLoad,
                        onIncrementalError: this.OnIncrementalError,
                        onError: this.props.onError,
                      }),
                  }),
                  r,
                ],
              }),
          }),
      })
    );
  }
};
c([g], X.prototype, `OnIncrementalError`, null),
  c([g], X.prototype, `OnHeaderLoad`, null),
  c([g], X.prototype, `OnBlurImageLoaded`, null),
  c([g], X.prototype, `OnBlurImageFailed`, null);
function $e(t) {
  let {
      logoPosition: n,
      strLogoImageURL: r,
      children: i,
      fnOnPositionChanged: a,
      fullscreen: o,
    } = t,
    {
      nBottomPct: s,
      nTopPct: c,
      nLeftPct: l,
      nRightPct: u,
    } = et(n.pinnedPosition, n.nWidthPct, n.nHeightPct);
  _.useContext(q);
  let d = {
      left: `${l}%`,
      top: `${c}%`,
      width: `${n.nWidthPct}%`,
      height: `${n.nHeightPct}%`,
    },
    f = e(L, v[n.pinnedPosition]);
  return (0, U.jsx)(`div`, {
    className: I,
    children: (0, U.jsxs)(`div`, {
      className: C,
      children: [
        !t.editMode &&
          (0, U.jsx)(`div`, {
            className: f,
            style: d,
            children: (0, U.jsx)(le, {
              timeout: G,
              appear: !0,
              in: o,
              classNames: W,
              children: (e) =>
                (0, U.jsx)(`div`, {
                  ref: e,
                  className: `hNHwGI-JZlg-`,
                  children: i,
                }),
            }),
          }),
        t.editMode &&
          (0, U.jsx)(Z, {
            id: r,
            pinType: n.pinnedPosition,
            index: 0,
            widthPct: n.nWidthPct,
            heightPct: n.nHeightPct,
            fnOnPositionChanged: a,
            children: i,
          }),
      ],
    }),
  });
}
function et(e, t, n) {
  let r, i, a, o;
  switch (e) {
    case he:
      (r = 0), (i = 100 - n), (a = 0), (o = 100 - t);
      break;
    case me:
      (r = 100 - n), (i = 0), (a = 0), (o = 100 - t);
      break;
    case _e:
      (r = (100 - n) / 2),
        (i = (100 - n) / 2),
        (a = (100 - t) / 2),
        (o = (100 - t) / 2);
      break;
    case ge:
      (r = 100 - n), (i = 0), (a = (100 - t) / 2), (o = (100 - t) / 2);
      break;
    case ve:
      (r = 0), (i = 100 - n), (a = (100 - t) / 2), (o = (100 - t) / 2);
  }
  return { nBottomPct: r, nTopPct: i, nLeftPct: a, nRightPct: o };
}
var Z = class extends _.Component {
  m_rectLinkRegion;
  m_elLinkRegionBox;
  m_nLocalOffsetXPct;
  m_nLocalOffsetYPct;
  m_fnMouseUp = null;
  m_fnMouseMove = null;
  m_listeners = new m();
  m_pinType;
  constructor(e) {
    super(e), (this.state = {});
  }
  componentWillUnmount() {
    this.m_listeners.Unregister();
  }
  componentDidUpdate() {
    this.props.pinType != this.state.pinType &&
      ((this.m_pinType = this.props.pinType),
      this.setState({ pinType: this.props.pinType }),
      this.UpdateBoxPosition());
  }
  static getDerivedStateFromProps(e, t) {
    let { pinType: n, widthPct: r, heightPct: i, id: a } = e;
    if (t && t.id == a) return null;
    let { nBottomPct: o, nTopPct: s, nLeftPct: c, nRightPct: l } = et(n, r, i);
    return {
      id: a,
      curBottomPosPct: o,
      curTopPosPct: s,
      curLeftPosPct: c,
      curRightPosPct: l,
      curWidthPct: r,
      curHeightPct: i,
      EdgeDown: null,
      pinType: n,
    };
  }
  LinkRegionBoxRef(e) {
    this.m_elLinkRegionBox = e;
  }
  OnMouseDown(e, t) {
    (this.m_fnMouseUp = (e) => {
      this.OnMouseUp(e, t);
    }),
      (this.m_fnMouseMove = (e) => {
        this.OnMouseMove(e, t);
      }),
      this.setState({ EdgeDown: t }),
      (this.m_rectLinkRegion =
        this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
      (this.m_nLocalOffsetXPct =
        ((e.clientX - this.m_rectLinkRegion.left) /
          (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
          100 -
        this.state.curLeftPosPct),
      (this.m_nLocalOffsetYPct =
        ((e.clientY - this.m_rectLinkRegion.top) /
          (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
          100 -
        this.state.curTopPosPct),
      this.m_listeners.AddEventListener(
        this.m_elLinkRegionBox.ownerDocument.defaultView,
        `mousemove`,
        this.m_fnMouseMove,
      ),
      this.m_listeners.AddEventListener(
        this.m_elLinkRegionBox.ownerDocument.defaultView,
        `mouseup`,
        this.m_fnMouseUp,
      ),
      e.preventDefault(),
      e.stopPropagation();
  }
  UpdateBoxPosition() {
    let {
      nBottomPct: e,
      nTopPct: t,
      nLeftPct: n,
      nRightPct: r,
    } = et(this.m_pinType, this.state.curWidthPct, this.state.curHeightPct);
    this.setState({
      curBottomPosPct: e,
      curTopPosPct: t,
      curLeftPosPct: n,
      curRightPosPct: r,
    });
  }
  OnMouseMove(e, t) {
    if (this.state.EdgeDown === void 0) return;
    e.shiftKey && this.m_fnMouseUp();
    let {
        curTopPosPct: n,
        curRightPosPct: r,
        curBottomPosPct: i,
        curLeftPosPct: a,
      } = this.state,
      o = (e) => {
        let t =
          ((e - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
          this.m_nLocalOffsetXPct;
        if (
          this.props.pinType == `UpperLeft` ||
          this.props.pinType == `BottomLeft`
        )
          return 0;
        if (
          this.props.pinType == `CenterCenter` ||
          this.props.pinType == `BottomCenter` ||
          this.props.pinType == `UpperCenter`
        ) {
          let e = Math.min(Math.max(t, 0), 45);
          return (r = e), e;
        }
        return t;
      },
      s = (e) => {
        let t =
          100 -
          (((e - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 +
            (this.state.curWidthPct - this.m_nLocalOffsetXPct));
        if (
          this.props.pinType == `CenterCenter` ||
          this.props.pinType == `BottomCenter` ||
          this.props.pinType == `UpperCenter`
        ) {
          let e = Math.min(Math.max(t, 0), 45);
          return (a = e), e;
        }
        return t;
      },
      c = (e) => {
        let t =
          ((e - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
          this.m_nLocalOffsetYPct;
        if (
          this.props.pinType == `UpperCenter` ||
          this.props.pinType == `UpperLeft`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return (i = e), e;
        }
        return t;
      },
      l = (e) => {
        let t =
          100 -
          (((e - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 +
            (this.state.curHeightPct - this.m_nLocalOffsetYPct));
        if (
          this.props.pinType == `BottomLeft` ||
          this.props.pinType == `BottomCenter`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return (n = e), e;
        }
        return t;
      };
    function u() {
      i = Math.min(i, 98 - n);
    }
    function f() {
      r = Math.min(r, 99 - a);
    }
    function p() {
      n = Math.min(n, 98 - i);
    }
    function m() {
      a = Math.min(a, 99 - r);
    }
    switch (t) {
      case `Left`:
        (a = o(e.clientX)), m();
        break;
      case `Right`:
        (r = s(e.clientX)), f();
        break;
      case `Top`:
        (n = c(e.clientY)), p();
        break;
      case `Bottom`:
        (i = l(e.clientY)), u();
        break;
      case `Topleft`:
        (n = c(e.clientY)), (a = o(e.clientX)), p(), m();
        break;
      case `TopRight`:
        (n = c(e.clientY)), (r = s(e.clientX)), p(), f();
        break;
      case `BottomLeft`:
        (i = l(e.clientY)), (a = o(e.clientX)), u(), m();
        break;
      case `BottomRight`:
        (i = l(e.clientY)), (r = s(e.clientX)), u(), f();
        break;
      case `Middle`:
        (r = s(e.clientX)),
          (i = l(e.clientY)),
          this.state.pinType != `CenterCenter` && (n = c(e.clientY)),
          this.state.pinType != `CenterCenter` &&
            this.state.pinType != `BottomCenter` &&
            this.state.pinType != `UpperCenter` &&
            (a = o(e.clientX)),
          p(),
          u(),
          m(),
          f();
    }
    (n = d(n, 0, 98)),
      (i = d(i, 0, 98)),
      (a = d(a, 0, 99)),
      (r = d(r, 0, 99)),
      this.setState({
        curTopPosPct: n,
        curRightPosPct: r,
        curBottomPosPct: i,
        curLeftPosPct: a,
      }),
      e.preventDefault(),
      e.stopPropagation();
  }
  OnMouseUp(e, t) {
    this.setState(
      {
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
        curHeightPct:
          100 - this.state.curBottomPosPct - this.state.curTopPosPct,
      },
      this.OnResizeComplete,
    ),
      this.setState({ EdgeDown: void 0 }),
      this.m_listeners.Unregister();
  }
  OnResizeComplete() {
    this.props.fnOnPositionChanged &&
      this.props.fnOnPositionChanged({
        pinnedPosition: this.state.pinType,
        nWidthPct: this.state.curWidthPct,
        nHeightPct: this.state.curHeightPct,
      });
  }
  render() {
    let t = {
        left: this.state.curLeftPosPct + `%`,
        top: this.state.curTopPosPct + `%`,
        right: this.state.curRightPosPct + `%`,
        bottom: this.state.curBottomPosPct + `%`,
      },
      n = e(
        R,
        this.state.EdgeDown && e(`PIhA-Ktj63o-`, v[this.state.EdgeDown]),
        v[this.props.pinType],
      );
    return (0, U.jsx)(`div`, {
      className: n,
      style: t,
      ref: this.LinkRegionBoxRef,
      draggable: !1,
      children: (0, U.jsxs)(`div`, {
        className: z,
        children: [
          (0, U.jsx)(`div`, {
            className: `${x} ${B}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Topleft`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${V}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Top`);
            },
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${Fe}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `TopRight`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${Ie}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Left`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${S}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Middle`);
            },
            draggable: !1,
            children: (0, U.jsx)(`div`, {
              className: A,
              children: this.props.children,
            }),
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${ze}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Right`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${P}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `BottomLeft`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${Be}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Bottom`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${x} ${Ve}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `BottomRight`);
            },
            draggable: !1,
          }),
        ],
      }),
    });
  }
};
c([g], Z.prototype, `LinkRegionBoxRef`, null),
  c([g], Z.prototype, `OnMouseDown`, null),
  c([g], Z.prototype, `UpdateBoxPosition`, null),
  c([g], Z.prototype, `OnMouseMove`, null),
  c([g], Z.prototype, `OnMouseUp`, null),
  c([g], Z.prototype, `OnResizeComplete`, null);
var tt = (t) => {
  let { title: n, className: r } = t,
    i = 26;
  n.length > 8 && (i = Math.max(i - (n.length - 5) / 2, 5.8));
  let [a, o] = re();
  return (0, U.jsxs)(`svg`, {
    className: e(H, r),
    viewBox: `0 0 300 14`,
    children: [
      (0, U.jsx)(`defs`, {
        children: (0, U.jsxs)(`linearGradient`, {
          id: a,
          x1: `0`,
          x2: `0`,
          y1: `0`,
          y2: `100%`,
          gradientUnits: `userSpaceOnUse`,
          children: [
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `0%` }),
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `20%` }),
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `40%` }),
            (0, U.jsx)(`stop`, { stopColor: `#eee`, offset: `60%` }),
            (0, U.jsx)(`stop`, { stopColor: `#ddd`, offset: `80%` }),
            (0, U.jsx)(`stop`, { stopColor: `#ccc`, offset: `100%` }),
          ],
        }),
      }),
      (0, U.jsx)(`text`, {
        x: `-1`,
        y: 14,
        fontSize: i,
        textAnchor: `bottom`,
        fontWeight: `200`,
        fill: o,
        children: n,
      }),
    ],
  });
};
function nt(t) {
  let { title: n, children: r } = t,
    i = _.useContext(q),
    a = _.useRef(null);
  return (0, U.jsx)(ce, {
    nodeRef: a,
    timeout: G,
    appear: !0,
    in: i.bFullscreen,
    classNames: W,
    children: (0, U.jsxs)(`div`, {
      ref: a,
      className: e(Je, n ? void 0 : ``),
      children: [
        (0, U.jsx)(`div`, {
          className: qe,
          children: !!n && (0, U.jsx)(tt, { title: n }),
        }),
        (0, U.jsx)(`div`, { className: Ye, children: r }),
      ],
    }),
  });
}
var rt = class {
  m_strLibraryLogoURL;
  m_strLibraryHeroURL;
  m_unAppID;
  m_strAppName;
  m_logoPosition = void 0;
  m_strSaveURL;
  constructor(e) {
    f(this),
      (this.m_strLibraryHeroURL = e.strLibraryHeroURL),
      (this.m_strLibraryLogoURL = e.strLibraryLogoURL),
      (this.m_unAppID = e.unAppID),
      (this.m_strAppName = e.strAppName),
      (this.m_logoPosition = e.logoPosition || K),
      (this.m_strSaveURL = e.strSaveURL || null),
      this.m_logoPosition.pinnedPosition ||
        (this.m_logoPosition.pinnedPosition = K.pinnedPosition),
      this.m_logoPosition.nHeightPct ||
        (this.m_logoPosition.nHeightPct = K.nHeightPct),
      this.m_logoPosition.nWidthPct ||
        (this.m_logoPosition.nWidthPct = K.nWidthPct);
  }
  GetHeroURL() {
    return this.m_strLibraryHeroURL;
  }
  GetLogoURL() {
    return this.m_strLibraryLogoURL;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppName() {
    return this.m_strAppName;
  }
  GetLogoPosition() {
    return this.m_logoPosition;
  }
  SetLogoPosition(e) {
    this.m_logoPosition = e;
  }
  GetSaveURL() {
    return this.m_strSaveURL;
  }
};
c([r], rt.prototype, `m_logoPosition`, void 0);
var it = `gZTjQNknWIg-`,
  at = `lnkyboMJU1k-`,
  ot = `pYwhblKojHA-`,
  st = `SJbG2sewzgw-`,
  ct = `pqPJ00DjeAQ-`,
  lt = `UdoT8nbRZ50-`,
  ut = `Ez29KTBrKgk-`,
  dt = `kKzc9HliZ3o-`,
  ft = `bdDiMIItJIc-`,
  pt = `rz6s6W5aVGg-`,
  mt = `h3AARtFdvkE-`,
  ht = `IEjr2GHHVO8-`,
  gt = `UgxwXmTs3dk-`,
  _t = `_8iXOZFyh5fk-`,
  vt = `d3uhwRLMAco-`,
  yt = `CfMNPDUt1oc-`,
  bt = `_5QFPMf4FN7I-`,
  xt = `Bnh4xoaC6CE-`,
  St = `yPxcIT6FtEI-`,
  Ct = `VUv8Fwgl4Yk-`,
  wt = `g5BEkJBcUOQ-`,
  Tt = `_7ayILp-7DAY-`,
  Et = `xhMdzQNmgZA-`,
  Dt = `Jap35bAnbeY-`,
  Ot = `ZPKHyjagDGc-`,
  kt = `LLL-ejIWdM0-`,
  At = `yRrAc142NnM-`,
  jt = `_4BXDW4zWmHE-`,
  Mt = `EqJqovUKNuA-`,
  Nt = `-vkVQUcE4-4-`,
  Pt = `Fj23xrwt0gU-`,
  Ft = `_6vX34XWHqLs-`,
  It = `KJ7LlYMItdw-`,
  Lt = `V1SCWKRLdiw-`,
  Rt = `BSaL1mvX1-Y-`,
  zt = `Et8TleuXa6s-`,
  Bt = `VKqNZ4kVIF0-`,
  Vt = `E0DW8YLs3HE-`,
  Ht = `sQU67pphNqw-`,
  Ut = `cexYnfOA6Wo-`,
  Wt = `eZSNsE46fnA-`,
  Gt = `T0y9mw3oF8A-`,
  Kt = `kfm5dxnWNmc-`,
  qt = `BMe08DVBdqU-`,
  Jt = `MF9G0HKI4w0-`;
function Yt() {
  return (0, U.jsxs)(_.Fragment, {
    children: [
      (0, U.jsx)(`span`, { style: { fontSize: 0 } }),
      (0, U.jsx)(`div`, {
        className: e(vt),
        children: (0, U.jsxs)(`div`, {
          className: yt,
          children: [
            (0, U.jsx)($t, {}),
            (0, U.jsx)(Xt, {}),
            (0, U.jsx)(`div`, {
              className: Ct,
              children: (0, U.jsxs)(`div`, {
                className: wt,
                children: [
                  (0, U.jsx)(`div`, {
                    className: Dt,
                    children: (0, U.jsx)(ne, {}),
                  }),
                  (0, U.jsxs)(`div`, {
                    className: Tt,
                    children: [
                      `Game Info`,
                      (0, U.jsx)(`div`, {
                        className: Et,
                        children: (0, U.jsx)(ee, { angle: 180 }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Xt() {
  return (0, U.jsx)(`div`, { className: e(xt), children: (0, U.jsx)(Zt, {}) });
}
function Zt() {
  return (0, U.jsxs)(`div`, {
    className: St,
    children: [
      (0, U.jsx)(`div`, {
        className: Vt,
        children: (0, U.jsxs)(`div`, {
          className: Ht,
          children: [
            (0, U.jsx)(`div`, { className: Ut, children: `LAST PLAYED` }),
            (0, U.jsx)(`div`, { className: Wt, children: `Mar 24` }),
          ],
        }),
      }),
      (0, U.jsxs)(`div`, {
        className: It,
        children: [
          (0, U.jsx)(`div`, { className: Lt }),
          (0, U.jsxs)(`div`, {
            className: Rt,
            children: [
              (0, U.jsx)(`div`, { className: zt, children: `PLAY TIME` }),
              (0, U.jsx)(`div`, { className: Bt, children: `37 hours` }),
            ],
          }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: At,
        children: [
          (0, U.jsx)(`div`, { className: jt }),
          (0, U.jsxs)(`div`, {
            className: Mt,
            children: [
              (0, U.jsx)(`div`, { className: Pt, children: `ACHIEVEMENTS` }),
              (0, U.jsxs)(`div`, {
                className: Nt,
                children: [
                  (0, U.jsx)(`div`, { className: Ft, children: `30/47` }),
                  (0, U.jsx)(Qt, { progressPct: 3e3 / 47 }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Qt = class extends _.Component {
  render() {
    return (0, U.jsx)(`div`, {
      className: Ot,
      children: (0, U.jsx)(`div`, {
        className: kt,
        style: { width: this.props.progressPct + `%` },
      }),
    });
  }
};
function $t() {
  return (0, U.jsx)(`div`, {
    className: bt,
    children: (0, U.jsx)(`div`, {
      className: Gt,
      children: (0, U.jsx)(`div`, {
        className: e(Kt, qt),
        children: (0, U.jsx)(`div`, { className: Jt, children: `PLAY` }),
      }),
    }),
  });
}
var en = `Szu04ev-WDc-`,
  tn = `_8QZBI7nPLaM-`,
  nn = `cZy78P5HezQ-`,
  rn = `Y34KO8gjg6s-`,
  an = [
    `Apex Legends™`,
    `Baldur's Gate 3`,
    `Battlefield™ 6`,
    `Black Desert`,
    `Black Myth: Wukong`,
    `Borderlands 4`,
    `Clair Obscur: Expedition 33`,
    `Counter-Strike 2`,
    `Cronos: The New Dawn`,
    `Crusader Kings III`,
    `Cyberpunk 2077`,
    `Dead by Daylight`,
    `Delta Force`,
    `Destiny 2`,
    `Dota 2`,
    `Dune: Awakening`,
    `Dying Light: The Beast`,
    `EA SPORTS FC™ 26`,
    `ELDEN RING`,
    `ELDEN RING NIGHTREIGN`,
    `Euro Truck Simulator 2`,
    `F1® 25`,
    `FINAL FANTASY XIV Online`,
    `Forza Horizon 5`,
    `Grand Theft Auto V Enhanced`,
    `Grounded 2`,
    `HELLDIVERS™ 2`,
    `Hollow Knight`,
    `Hollow Knight: Silksong`,
    `Killing Floor 3`,
    `Kingdom Come: Deliverance II`,
    `Limbus Company`,
    `Lost Ark`,
    `METAL GEAR SOLID Δ: SNAKE EATER`,
    `Madden NFL 26`,
    `Mafia: The Old Country`,
    `Mage Arena`,
    `Magic: The Gathering Arena`,
    `Marvel Rivals`,
    `NARAKA: BLADEPOINT`,
    `NBA 2K26`,
    `No Man's Sky`,
    `Once Human`,
    `Overwatch® 2`,
    `PEAK`,
    `PUBG: BATTLEGROUNDS`,
    `Path of Exile 2`,
    `R.E.P.O.`,
    `Ready or Not`,
    `Red Dead Redemption 2`,
    `RimWorld`,
    `Rust`,
    `Schedule I`,
    `Shape of Dreams`,
    `Split Fiction`,
    `Stardew Valley`,
    `Street Fighter™ 6`,
    `THE FINALS`,
    `THRONE AND LIBERTY`,
    `Team Fortress 2`,
    `The Elder Scrolls® Online`,
    `The First Descendant`,
    `The Sims™ 4`,
    `Titan Quest II`,
    `Tom Clancy's Rainbow Six® Siege X`,
    `Umamusume: Pretty Derby`,
    `WUCHANG: Fallen Feathers`,
    `Wallpaper Engine`,
    `War Thunder`,
    `Warframe`,
    `Warhammer 40,000: Dawn of War - Definitive Edition`,
    `Warhammer 40,000: Space Marine 2`,
    `Wuthering Waves`,
    `Yu-Gi-Oh! Master Duel`,
    `雀魂麻將(MahjongSoul)`,
  ];
function on(t) {
  let { highlightedName: n } = t,
    r = _.useCallback((e) => {
      e && e.scrollIntoView({ block: `center` });
    }, []),
    i = _.useMemo(() => {
      if (an.indexOf(n) !== -1) return an;
      {
        let e = [...an, n];
        return e.sort(), e;
      }
    }, [n]);
  return (0, U.jsx)(`div`, {
    className: en,
    children: i.map((t) => {
      let i = n === t;
      return (0, U.jsx)(
        `div`,
        { className: e(tn, i ? nn : rn), ref: i ? r : void 0, children: t },
        t,
      );
    }),
  });
}
function sn(e, t) {
  let n = new rt(a(`editorconfig`, t));
  be.createRoot(t).render(_.createElement(e ? Q : $, { LogoEditorStore: n }));
}
var Q = class extends _.Component {
  constructor(e) {
    super(e), (this.state = { saving: !1, saved: !1, unsavedChanges: !1 });
  }
  componentDidMount() {
    window.addEventListener(`beforeunload`, this.OnBeforeUnload);
  }
  componentWillUnmount() {
    window.removeEventListener(`beforeunload`, this.OnBeforeUnload);
  }
  OnBeforeUnload(e) {
    this.state.unsavedChanges &&
      (e.preventDefault(),
      (e.returnValue = `You have unsaved changes.  Are you sure you want to close this window?`));
  }
  async OnOK() {
    if (this.state.saving) return;
    let { LogoEditorStore: e } = this.props;
    this.setState({ saving: !0 }, async () => {
      if (e.GetSaveURL()) {
        let t = e.GetLogoPosition();
        try {
          let n = new FormData();
          n.append(`json`, `1`),
            n.append(`sessionid`, l()),
            n.append(
              `app[assets][library_logo][logo_position][pinned_position]`,
              t.pinnedPosition,
            ),
            n.append(
              `app[assets][library_logo][logo_position][width_pct]`,
              `` + t.nWidthPct,
            ),
            n.append(
              `app[assets][library_logo][logo_position][height_pct]`,
              `` + t.nHeightPct,
            ),
            await xe.default.post(e.GetSaveURL(), n),
            this.setState({ saving: !1, saved: !0, unsavedChanges: !1 });
        } catch (e) {
          console.error(e),
            alert(`There was a problem saving changes`),
            this.setState({ saving: !1 });
        }
      } else
        window.opener &&
          window.opener.postMessage(
            { appid: e.GetAppID(), ...n(e.GetLogoPosition()) },
            `*`,
          ),
          this.OnCancel();
    });
  }
  OnCancel() {
    window.removeEventListener(`beforeunload`, this.OnBeforeUnload),
      window.close();
  }
  OnPositionChanged() {
    this.state.unsavedChanges ||
      this.setState({ unsavedChanges: !0, saved: !1 });
  }
  render() {
    return (0, U.jsx)(_.Fragment, {
      children: (0, U.jsxs)(`div`, {
        className: e(ut, this.state.saving && `eL6nV1smj9g-`),
        children: [
          (0, U.jsxs)(`div`, {
            className: pt,
            children: [
              (0, U.jsx)(`div`, {
                className: e(mt, this.state.saved && `eSDyAoPnXQU-`),
                children: h(`#StoreAdmin_LibraryPlacementTool_ChangesSaved`),
              }),
              (0, U.jsxs)(`div`, {
                className: ht,
                children: [
                  (0, U.jsx)(ie, {
                    onClick: this.OnOK,
                    className: gt,
                    children: h(`#Button_Save`),
                  }),
                  (0, U.jsx)(te, {
                    onClick: this.OnCancel,
                    className: gt,
                    children: this.state.unsavedChanges
                      ? h(`#Button_Cancel`)
                      : h(`#Button_Close`),
                  }),
                ],
              }),
            ],
          }),
          (0, U.jsx)(`div`, {
            className: dt,
            children: (0, U.jsx)(de, { size: `xlarge`, className: ft }),
          }),
          (0, U.jsx)($, {
            ...this.props,
            fnOnPositionChanged: this.OnPositionChanged,
          }),
        ],
      }),
    });
  }
};
c([g], Q.prototype, `OnBeforeUnload`, null),
  c([g], Q.prototype, `OnOK`, null),
  c([g], Q.prototype, `OnCancel`, null),
  c([g], Q.prototype, `OnPositionChanged`, null);
var $ = class extends _.Component {
  constructor(e) {
    super(e), (this.state = { bEditModeEnabled: !0 });
  }
  OnPositionChanged(e) {
    let { LogoEditorStore: t, fnOnPositionChanged: n } = this.props;
    t.SetLogoPosition(e), n && n(e);
  }
  render() {
    let { LogoEditorStore: e } = this.props,
      t = !!e.GetLogoURL();
    return (0, U.jsxs)(`div`, {
      className: it,
      children: [
        (0, U.jsx)(`div`, {
          className: ct,
          children: (0, U.jsx)(on, { highlightedName: e.GetAppName() }),
        }),
        (0, U.jsx)(`div`, { className: _t }),
        (0, U.jsxs)(`div`, {
          className: ot,
          children: [
            (0, U.jsx)(cn, { LogoEditorStore: e }),
            (0, U.jsx)(`div`, {
              className: at,
              children: (0, U.jsx)(J, {
                editMode: t && this.state.bEditModeEnabled,
                hasHeroImage: !0,
                rgHeaderImages: [e.GetHeroURL()],
                rgLogoImages: t ? [e.GetLogoURL()] : [],
                classNameNoLogo: st,
                fnOnPositionChanged: this.OnPositionChanged,
                logoPosition: e.GetLogoPosition(),
                children: (0, U.jsx)(nt, {
                  title: e.GetLogoURL() ? `` : e.GetAppName(),
                }),
              }),
            }),
            (0, U.jsx)(Yt, {}),
            (0, U.jsxs)(`div`, {
              className: lt,
              children: [
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
              ],
            }),
          ],
        }),
      ],
    });
  }
};
c([g], $.prototype, `OnPositionChanged`, null);
var cn = oe((e) => {
  let t = e.LogoEditorStore.GetLogoPosition();
  return (0, U.jsxs)(_.Fragment, {
    children: [
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][pinned_position]`,
        value: t.pinnedPosition,
      }),
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][width_pct]`,
        value: t.nWidthPct,
      }),
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][height_pct]`,
        value: t.nHeightPct,
      }),
    ],
  });
});
export { sn as Init_LibraryLogoEditor };
