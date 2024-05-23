import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexDirectionGenerator extends Generator {
  cssData = [
    new CssClassData("fle-dir", ["flex-direction"],
      ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"])
  ]
}