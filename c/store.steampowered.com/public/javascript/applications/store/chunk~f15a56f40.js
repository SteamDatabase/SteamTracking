"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6014],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(_, _.options);
        return _.createElement("span", {
          ref: _,
          style: {
            fontSize: 0,
          },
        });
      }
      const _ = _.forwardRef(function (_, _) {
        const {
            onLeave: __webpack_require__,
            onEnter: _,
            options: _,
            ..._
          } = _,
          _ = (0, _._)(_, _.options),
          _ = (0, _._)(_, _);
        return _.createElement("div", {
          ref: _,
          ..._,
        });
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.version || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  version: {
                    _: 1,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  preference_state: {
                    _: 2,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  content_customization: {
                    _: 3,
                    _,
                  },
                  valve_analytics: {
                    _: 4,
                    _: _,
                  },
                  third_party_analytics: {
                    _: 5,
                    _: _,
                  },
                  third_party_content: {
                    _: 6,
                    _: _,
                  },
                  utm_enabled: {
                    _: 7,
                    _: !0,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.recentapps || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recentapps: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ContentCustomization";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.product_impressions_tracking || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  product_impressions_tracking: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ValveAnalytics";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.google_analytics || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  google_analytics: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.youtube || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  youtube: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  vimeo: {
                    _: 2,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  sketchfab: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  twitter: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.preferences || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  preferences: {
                    _: 1,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CAccountPrivacy_GetCookiePreferences_Response";
        }
      }
      !(function (_) {
        _.GetCookiePreferences = function (_, _) {
          return _.SendMsg(
            "AccountPrivacy.GetCookiePreferences#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 1,
            },
          );
        };
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = JSON.parse(`{
	"h": {
		"countries": {
			"AF": "Afghanistan",
			"AX": "Aland Islands",
			"AL": "Albania",
			"DZ": "Algeria",
			"AS": "American Samoa",
			"AD": "Andorra",
			"AO": "Angola",
			"AI": "Anguilla",
			"AQ": "Antarctica",
			"AG": "Antigua and Barbuda",
			"AR": "Argentina",
			"AM": "Armenia",
			"AW": "Aruba",
			"AU": "Australia",
			"AT": "Austria",
			"AZ": "Azerbaijan",
			"BS": "Bahamas",
			"BH": "Bahrain",
			"BD": "Bangladesh",
			"BB": "Barbados",
			"BY": "Belarus",
			"BE": "Belgium",
			"BZ": "Belize",
			"BJ": "Benin",
			"BM": "Bermuda",
			"BT": "Bhutan",
			"BO": "Bolivia",
			"BA": "Bosnia and Herzegovina",
			"BW": "Botswana",
			"BV": "Bouvet Island",
			"BR": "Brazil",
			"IO": "British Indian Ocean Territory",
			"BN": "Brunei Darussalam",
			"BG": "Bulgaria",
			"BF": "Burkina Faso",
			"BI": "Burundi",
			"KH": "Cambodia",
			"CM": "Cameroon",
			"CA": "Canada",
			"CV": "Cabo Verde",
			"KY": "Cayman Islands",
			"CF": "Central African Republic",
			"TD": "Chad",
			"CL": "Chile",
			"CN": "China",
			"XC": "China",
			"CX": "Christmas Island",
			"CC": "Cocos (Keeling) Islands",
			"CO": "Colombia",
			"KM": "Comoros",
			"CG": "Congo",
			"CD": "Congo, the Democratic Republic of the",
			"CK": "Cook Islands",
			"CR": "Costa Rica",
			"CI": "Cote d'Ivoire",
			"HR": "Croatia",
			"CY": "Cyprus",
			"CZ": "Czech Republic",
			"DK": "Denmark",
			"DJ": "Djibouti",
			"DM": "Dominica",
			"DO": "Dominican Republic",
			"EC": "Ecuador",
			"EG": "Egypt",
			"SV": "El Salvador",
			"GQ": "Equatorial Guinea",
			"ER": "Eritrea",
			"EE": "Estonia",
			"ET": "Ethiopia",
			"FK": "Falkland Islands (Malvinas)",
			"FO": "Faroe Islands",
			"FJ": "Fiji",
			"FI": "Finland",
			"FR": "France",
			"GF": "French Guiana",
			"PF": "French Polynesia",
			"TF": "French Southern Territories",
			"GA": "Gabon",
			"GM": "Gambia",
			"GE": "Georgia",
			"DE": "Germany",
			"GH": "Ghana",
			"GI": "Gibraltar",
			"GR": "Greece",
			"GL": "Greenland",
			"GD": "Grenada",
			"GP": "Guadeloupe",
			"GU": "Guam",
			"GT": "Guatemala",
			"GN": "Guinea",
			"GW": "Guinea-Bissau",
			"GG": "Guernsey",
			"GY": "Guyana",
			"HT": "Haiti",
			"HM": "Heard and Mc Donald Islands",
			"VA": "Holy See(Vatican City State)",
			"HN": "Honduras",
			"HK": "Hong Kong",
			"HU": "Hungary",
			"IS": "Iceland",
			"IN": "India",
			"ID": "Indonesia",
			"IQ": "Iraq",
			"IE": "Ireland",
			"IM": "Isle of Man",
			"IL": "Israel",
			"IT": "Italy",
			"JM": "Jamaica",
			"JP": "Japan",
			"JE": "Jersey",
			"JO": "Jordan",
			"KZ": "Kazakhstan",
			"KE": "Kenya",
			"KI": "Kiribati",
			"KR": "Korea, Republic of",
			"KW": "Kuwait",
			"KG": "Kyrgyzstan",
			"LA": "Lao People's Democratic Republic",
			"LV": "Latvia",
			"LB": "Lebanon",
			"LS": "Lesotho",
			"LR": "Liberia",
			"LI": "Liechtenstein",
			"LT": "Lithuania",
			"LU": "Luxembourg",
			"LY": "Libya",
			"MO": "Macau",
			"MK": "North Macedonia, Republic of",
			"MG": "Madagascar",
			"MW": "Malawi",
			"MY": "Malaysia",
			"MV": "Maldives",
			"ML": "Mali",
			"MT": "Malta",
			"MH": "Marshall Islands",
			"MQ": "Martinique",
			"MR": "Mauritania",
			"MU": "Mauritius",
			"YT": "Mayotte",
			"MX": "Mexico",
			"FM": "Micronesia, Federated States of",
			"MD": "Moldova, Republic of",
			"MC": "Monaco",
			"MN": "Mongolia",
			"ME": "Montenegro",
			"MS": "Montserrat",
			"MA": "Morocco",
			"MZ": "Mozambique",
			"MM": "Myanmar",
			"NA": "Namibia",
			"NR": "Nauru",
			"NP": "Nepal",
			"NL": "Netherlands",
			"AN": "Netherlands Antilles",
			"NC": "New Caledonia",
			"NZ": "New Zealand",
			"NI": "Nicaragua",
			"NE": "Niger",
			"NG": "Nigeria",
			"NU": "Niue",
			"NF": "Norfolk Island",
			"MP": "Northern Mariana Islands",
			"NO": "Norway",
			"OM": "Oman",
			"PK": "Pakistan",
			"PW": "Palau",
			"PS": "Palestinian Territory, Occupied",
			"PA": "Panama",
			"PG": "Papua New Guinea",
			"PY": "Paraguay",
			"PE": "Peru",
			"PH": "Philippines",
			"PN": "Pitcairn",
			"PL": "Poland",
			"PT": "Portugal",
			"PR": "Puerto Rico",
			"QA": "Qatar",
			"RE": "Reunion",
			"RO": "Romania",
			"RU": "Russian Federation",
			"RW": "Rwanda",
			"SH": "Saint Helena",
			"KN": "Saint Kitts and Nevis",
			"LC": "Saint Lucia",
			"PM": "Saint Pierre and Miquelon",
			"VC": "Saint Vincent and the Grenadines",
			"WS": "Samoa",
			"SM": "San Marino",
			"ST": "Sao Tome and Principe",
			"SA": "Saudi Arabia",
			"SN": "Senegal",
			"RS": "Serbia",
			"SC": "Seychelles",
			"SL": "Sierra Leone",
			"SG": "Singapore",
			"SK": "Slovakia",
			"SI": "Slovenia",
			"SB": "Solomon Islands",
			"SO": "Somalia",
			"ZA": "South Africa",
			"GS": "South Georgia and the South Sandwich Islands",
			"ES": "Spain",
			"LK": "Sri Lanka",
			"SD": "Sudan",
			"SR": "Suriname",
			"SJ": "Svalbard and Jan Mayen",
			"SY": "Syria",
			"SZ": "Eswatini",
			"SE": "Sweden",
			"CH": "Switzerland",
			"TW": "Taiwan",
			"TJ": "Tajikistan",
			"TZ": "Tanzania, United Republic of",
			"TH": "Thailand",
			"TL": "Timor-Leste",
			"TG": "Togo",
			"TK": "Tokelau",
			"TO": "Tonga",
			"TT": "Trinidad and Tobago",
			"TN": "Tunisia",
			"TR": "Turkey",
			"TM": "Turkmenistan",
			"TC": "Turks and Caicos Islands",
			"TV": "Tuvalu",
			"UG": "Uganda",
			"UA": "Ukraine",
			"AE": "United Arab Emirates",
			"GB": "United Kingdom",
			"US": "United States",
			"UM": "United States Minor Outlying Islands",
			"UY": "Uruguay",
			"UZ": "Uzbekistan",
			"VU": "Vanuatu",
			"VE": "Venezuela",
			"VN": "Viet Nam",
			"VG": "Virgin Islands, British",
			"VI": "Virgin Islands, U.S.",
			"WF": "Wallis and Futuna",
			"EH": "Western Sahara",
			"YE": "Yemen",
			"ZM": "Zambia",
			"ZW": "Zimbabwe"
		},
		"eucountries": {
			"AT": "Austria",
			"BE": "Belgium",
			"BG": "Bulgaria",
			"HR": "Croatia",
			"CY": "Cyprus",
			"CZ": "Czech Republic",
			"DK": "Denmark",
			"EE": "Estonia",
			"FI": "Finland",
			"FR": "France",
			"DE": "Germany",
			"GR": "Greece",
			"HU": "Hungary",
			"IE": "Ireland",
			"IT": "Italy",
			"LV": "Latvia",
			"LT": "Lithuania",
			"LU": "Luxembourg",
			"MT": "Malta",
			"NL": "Netherlands",
			"PL": "Poland",
			"PT": "Portugal",
			"RO": "Romania",
			"SK": "Slovakia",
			"SI": "Slovenia",
			"ES": "Spain",
			"SE": "Sweden",
			"GB": "United Kingdom"
		},
		"eeacountries": {
			"NO": "Norway",
			"IS": "Iceland",
			"LI": "Liechtenstein"
		},
		"usstates": {
			"AL": "Alabama",
			"AK": "Alaska",
			"AS": "American Samoa",
			"AZ": "Arizona",
			"AR": "Arkansas",
			"CA": "California",
			"CO": "Colorado",
			"CT": "Connecticut",
			"DE": "Delaware",
			"DC": "District of Columbia",
			"FM": "Federated States of Micronesia",
			"FL": "Florida",
			"GA": "Georgia",
			"GU": "Guam",
			"HI": "Hawaii",
			"ID": "Idaho",
			"IL": "Illinois",
			"IN": "Indiana",
			"IA": "Iowa",
			"KS": "Kansas",
			"KY": "Kentucky",
			"LA": "Louisiana",
			"ME": "Maine",
			"MH": "Marshall Islands",
			"MD": "Maryland",
			"MA": "Massachusetts",
			"MI": "Michigan",
			"MN": "Minnesota",
			"MS": "Mississippi",
			"MO": "Missouri",
			"MT": "Montana",
			"NE": "Nebraska",
			"NV": "Nevada",
			"NH": "New Hampshire",
			"NJ": "New Jersey",
			"NM": "New Mexico",
			"NY": "New York",
			"NC": "North Carolina",
			"ND": "North Dakota",
			"MP": "Northern Mariana Islands",
			"OH": "Ohio",
			"OK": "Oklahoma",
			"OR": "Oregon",
			"PW": "Palau",
			"PA": "Pennsylvania",
			"PR": "Puerto Rico",
			"RI": "Rhode Island",
			"SC": "South Carolina",
			"SD": "South Dakota",
			"TN": "Tennessee",
			"TX": "Texas",
			"UT": "Utah",
			"VT": "Vermont",
			"VI": "U.S. Virgin Islands",
			"VA": "Virginia",
			"WA": "Washington",
			"WV": "West Virginia",
			"WI": "Wisconsin",
			"WY": "Wyoming",
			"AA": "Armed Forces Americas",
			"AE": "Armed Forces",
			"AP": "Armed Forces Pacific"
		}
	}
}`)._;
      var _ = __webpack_require__("chunkid");
      async function _(_) {
        if ((0, _._)(_._.EREALM))
          return {
            version: 1,
            preference_state: 0,
          };
        if (_._.logged_in) {
          const _ = (await _.GetCookiePreferences(_, {}))
            .Body()
            .toObject().preferences;
          if (_ && void 0 !== _.version && 0 != _.version) return _;
        }
        try {
          const _ = (0, _._)(_._);
          if (_) {
            const _ = JSON.parse(_);
            if (_ && void 0 !== _.version && 0 != _.version) return _;
          }
        } catch (_) {}
        const _ = _._.COUNTRY;
        return _ in _.eucountries || _ in _.eeacountries || "CH" === _
          ? {
              version: 1,
              preference_state: 4,
            }
          : {
              version: 1,
              preference_state: 0,
            };
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _() {
        const _ = (0, _._)();
        return (0, _._)(
          (function (_) {
            return {
              queryKey: ["CookiePreferences"],
              queryFn: () => _(_),
            };
          })(_),
        );
      }
      function _(_) {
        const { data: _ } = _();
        return _
          ? (function (_, _) {
              switch (_.preference_state) {
                case 0:
                case 1:
                  return !0;
                case 2:
                  return !1;
                default:
                  switch (_) {
                    case "youtube":
                      return _.third_party_content?.youtube;
                    case "vimeo":
                      return _.third_party_content?.vimeo;
                    case "sketchfab":
                      return _.third_party_content?.sketchfab;
                    case "generic":
                      return !1;
                  }
              }
            })(_, _)
          : void 0;
      }
      function _() {
        const { data: _ } = _();
        return _
          ? !(function (_) {
              switch (_.preference_state) {
                case 0:
                case 1:
                  return !1;
                default:
                  return !0;
              }
            })(_)
          : void 0;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.NotLoaded = 0)] = "NotLoaded"),
          (_[(_.Loading = 1)] = "Loading"),
          (_[(_.Loaded = 2)] = "Loaded");
      })(_ || (_ = {}));
      let _ = _.NotLoaded,
        _ = [];
      function _(_) {
        if (_ != _.Loaded) {
          if (_ == _.NotLoaded) {
            let _ = document.createElement("script");
            _.src = "https://www.youtube.com/iframe_api";
            let _ = document.getElementsByTagName("script")[0];
            _.parentNode.insertBefore(_, _),
              (window.onYouTubeIframeAPIReady = _);
          }
          _ && (_.includes(_) || _.push(_));
        } else _ && _();
      }
      function _(_ = !0) {
        const _ = (0, _._)("youtube");
        (0, _.useEffect)(() => {
          _ && _ && _();
        }, [_, _]);
      }
      function _() {
        _ = _.Loaded;
        for (let _ of _) _();
        _ = [];
      }
      class _ extends _.Component {
        m_strPlayerID = "";
        m_player = null;
        m_playerContainer = null;
        m_bPlayerReady = !1;
        static s_nPlayerIndex = 0;
        constructor(_) {
          super(_),
            (this.m_strPlayerID = "YoutubePlayer_" + _.s_nPlayerIndex++),
            (this.state = {
              bYoutubeLoaded: !1,
            });
        }
        componentWillUnmount() {
          var _;
          this.DestroyPlayer(), (_ = this.OnYoutubeScriptsReady), _._(_, _);
        }
        shouldComponentUpdate(_, _) {
          if (!this.m_player) return !1;
          const _ = this.props;
          return _.autoplay != _.autoplay ||
            _.controls != _.controls ||
            _.showInfo != _.showInfo ||
            _.video != _.video
            ? (this.CreatePlayer(_), !1)
            : ((_.width == _.width && _.height == _.height) ||
                (this.m_bPlayerReady &&
                  _.width &&
                  _.height &&
                  this.m_player.setSize(_.width, _.height)),
              _.forcePause != _.forcePause);
        }
        componentDidUpdate(_) {
          _.forcePause != this.props.forcePause &&
            (this.props.forcePause
              ? this.m_player.pauseVideo()
              : this.m_player.playVideo());
        }
        DestroyPlayer() {
          if (this.m_player)
            try {
              this.m_player.stopVideo && this.m_player.stopVideo(),
                this.m_player.destroy && this.m_player.destroy();
            } catch (_) {
            } finally {
              this.m_player = null;
            }
        }
        BindPlayerContainer(_) {
          this.m_playerContainer != _ &&
            ((this.m_playerContainer = _),
            this.DestroyPlayer(),
            this.m_playerContainer && _(this.OnYoutubeScriptsReady));
        }
        OnYoutubeScriptsReady() {
          this.CreatePlayer(this.props);
        }
        CreatePlayer(_) {
          if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
          const _ = !1 === _.autoplay ? 0 : 1,
            _ = !0 === _.showInfo ? 1 : 0,
            _ = !0 === _.controls ? 1 : 0,
            _ = !0 === _.showFullscreenBtn ? 1 : 0,
            _ = !0 === _.playsInline ? 1 : 0;
          let _ = {
              width: void 0 !== _.width ? String(_.width) : void 0,
              height: void 0 !== _.height ? String(_.height) : void 0,
              videoId: _.video,
              host: "https://www.youtube-nocookie.com",
              playerVars: {
                autoplay: _,
                showinfo: _,
                autohide: 1,
                _: _,
                modestbranding: 1,
                rel: 0,
                playsinline: _,
                iv_load_policy: 3,
                controls: _,
                start: _.startSeconds,
              },
              events: {
                onReady: this.OnPlayerReady,
                onStateChange: this.OnPlayerStateChange,
                onError: this.OnError,
              },
            },
            _ = this.m_playerContainer.firstElementChild;
          (this.m_bPlayerReady = !1), (this.m_player = new _.Player(_, _));
        }
        OnPlayerReady(_) {
          if (((this.m_bPlayerReady = !0), this.props.onVideoInfoChanged)) {
            let _ = this.m_player.getVideoData(),
              _ = {
                strAuthor: "",
                strTitle: "",
                strVideoID: "",
              };
            _.author && (_.strAuthor = _.author),
              _.title && (_.strTitle = _.title),
              _.video_id && (_.strVideoID = _.video_id),
              this.props.onVideoInfoChanged(_);
          }
          this.props.width &&
            this.props.height &&
            this.m_player.setSize(this.props.width, this.props.height),
            this.props.autoplay && this.m_player.playVideo(),
            this.props.onPlayerReady && this.props.onPlayerReady();
        }
        OnPlayerStateChange(_) {
          switch (_.data) {
            case _.PlayerState.UNSTARTED:
              break;
            case _.PlayerState.BUFFERING:
              this.props.onBuffering && this.props.onBuffering();
              break;
            case _.PlayerState.PLAYING:
              this.props.onPlaying && this.props.onPlaying();
              break;
            case _.PlayerState.PAUSED:
              this.props.onPaused && this.props.onPaused();
              break;
            case _.PlayerState.ENDED:
              this.props.onMovieEnd && this.props.onMovieEnd();
          }
        }
        OnError(_) {
          console.log("Youtube: Playback failed", _),
            this.props.onError && this.props.onError(_);
        }
        OnPlayerLeftView() {
          this.props.autopause &&
            this.m_player &&
            this.m_bPlayerReady &&
            this.m_player.pauseVideo();
        }
        PlayVideo(_) {
          this.m_player &&
            this.m_bPlayerReady &&
            (_ && this.m_player.seekTo(0, !0), this.m_player.playVideo());
        }
        render() {
          return _.createElement(
            _,
            {
              video: this.props.video,
            },
            _.createElement(
              _._,
              {
                key: this.m_strPlayerID,
                onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
                ref: this.BindPlayerContainer,
                className: (0, _._)("YoutubePlayer", this.props.classnames),
              },
              _.createElement(_._, {
                className: "YoutubePlayerThrobber",
              }),
            ),
          );
        }
      }
      function _(_) {
        const { video: _, children: __webpack_require__ } = _;
        return (0, _._)("youtube")
          ? __webpack_require__
          : _.createElement(
              "a",
              {
                href: `https://www.youtube.com/watch?v=${_}`,
              },
              (0, _._)("#EventCalendar_WatchYouTubeVideo"),
            );
      }
      (0, _._)([_._], _.prototype, "BindPlayerContainer", null),
        (0, _._)([_._], _.prototype, "OnYoutubeScriptsReady", null),
        (0, _._)([_._], _.prototype, "CreatePlayer", null),
        (0, _._)([_._], _.prototype, "OnPlayerReady", null),
        (0, _._)([_._], _.prototype, "OnPlayerStateChange", null),
        (0, _._)([_._], _.prototype, "OnError", null),
        (0, _._)([_._], _.prototype, "OnPlayerLeftView", null),
        (0, _._)([_._], _.prototype, "PlayVideo", null);
    },
  },
]);
