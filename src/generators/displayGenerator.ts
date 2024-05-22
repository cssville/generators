import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class DisplayGenerator extends Generator {
  cssData = [
    new CssClassData("dis", ["display"],
      ["block", "inline", "inline-block", "flex", "inline-flex", "inherit", "grid", "inline-grid",
        "flow-root", "none", "contents", "table", "table-row", "table-column", "table-cell", "list-item", "initial", "revert", "unset"],
      new Map([
        ["block-flow", ["block flow"]],
        ["inline-flow", ["inline flow"]],
        ["inline-flow-root", ["inline flow-root"]],
        ["block-flex", ["block flex"]],
        ["inline-flex", ["inline flex"]],
        ["block-grid", ["block grid"]],
        ["inline-grid", ["inline grid"]],
        ["block-flow-root", ["block flow-root"]],
      ])
    )
  ]
}