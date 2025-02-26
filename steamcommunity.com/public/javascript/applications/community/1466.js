/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1466, 861],
  {
    10861: (e, r, s) => {
      s.r(r),
        s.d(r, {
          DraggedTreeItemsIdentifier: () => t,
          TreeViewsDnDService: () => i,
        });
      class i {
        constructor() {
          this._dragOperations = new Map();
        }
        removeDragOperationTransfer(e) {
          if (e && this._dragOperations.has(e)) {
            const r = this._dragOperations.get(e);
            return this._dragOperations.delete(e), r;
          }
        }
      }
      class t {
        constructor(e) {
          this.identifier = e;
        }
      }
    },
    21466: (e, r, s) => {
      s.r(r), s.d(r, { ITreeViewsDnDService: () => a });
      var i = s(88888),
        t = s(70485),
        n = s(10861);
      const a = (0, t.u1)("treeViewsDndService");
      (0, i.v)(a, n.TreeViewsDnDService, 1);
    },
  },
]);
