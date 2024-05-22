import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class OverflowGenerator extends Generator {
  list = ["visible", "hidden", "scroll", "auto"]
  cssData = [
    new CssClassData("ove", ["overflow"], this.list),
    new CssClassData("ove-x", ["overflow-x"], this.list),
    new CssClassData("ove-y", ["overflow-y"], this.list),
  ]
}