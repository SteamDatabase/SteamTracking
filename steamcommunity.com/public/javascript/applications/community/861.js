/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [861],
  {
    10861: (e, r, s) => {
      s.r(r),
        s.d(r, {
          DraggedTreeItemsIdentifier: () => i,
          TreeViewsDnDService: () => t,
        });
      class t {
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
      class i {
        constructor(e) {
          this.identifier = e;
        }
      }
    },
  },
]);
