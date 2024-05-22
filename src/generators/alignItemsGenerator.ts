import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class AlignItemsGenerator extends Generator {
  cssData = [
    new CssClassData("ali-ite", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"],
      ["normal", "stretch", "center", "start", "flex-start", "end", "flex-end", "baseline", "inherit", "initial", "revert", "unset"],
      new Map([
        ["first-baseline", ["first baseline"]],
        ["last-baseline", ["last baseline"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
      ]))
  ]
}