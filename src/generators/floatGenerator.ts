import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class FloatGenerator extends Generator {
  cssData = [
    new CssClassData("flo", ["float"],
      ["left", "right", "none", "inherit", "initial", "revert", "unset"])
  ]
}