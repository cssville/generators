import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderCollapseGenerator extends Generator {
  list = ["collapse", "separate"]
  cssData = [
    new CssClassData("bor-col", ["border-collapse"], this.list),
  ]
}