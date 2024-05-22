import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FlexDirectionGenerator extends Generator {
  cssData = [
    new CssClassData("flex-direction", ["flex-direction"],
      ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"])
  ]
}