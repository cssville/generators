import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class PositionGenerator extends Generator {
  cssData = [
    new CssClassData("pos", ["position"],
      ["static", "relative", "absolute", "fixed", "sticky", "inherit", "initial", "revert", "unset"]),
  ]
}