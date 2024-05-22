import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexWrapGenerator extends Generator {
  cssData = [
    new CssClassData("fle-wra", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"],
      ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"])
  ]
}