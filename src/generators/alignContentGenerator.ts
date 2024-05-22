import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class AlignContentGenerator extends Generator {
  cssData = [
    new CssClassData("ali-con",
      ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"],
      ["center", "start", "end", "flex-start", "flex-end", "normal",
        "baseline", "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial",
        "revert", "revert-layer", "unset"],
      new Map([
        ["first-baseline", ["first baseline"]],
        ["last-baseline", ["last baseline"]],
        ["safe-center", ["safe center"]],
        ["unsafe-center", ["unsafe center"]],
      ]))
  ]
}