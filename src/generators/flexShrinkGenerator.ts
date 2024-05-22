import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexShrinkGenerator extends Generator {
  cssData = [
    new CssClassData("fle-shr", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"],
      ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"])
  ]
}