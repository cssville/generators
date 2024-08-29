import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexWrapGenerator extends Generator {
  cssData = [
    new CssClassData("fle-wra", ["flex-wrap"],
      ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"])
  ]
}