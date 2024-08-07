import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderWidthGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["0", ["0px"]],
    ["1", ["1px"]],
    ["2", ["2px"]],
    ["3", ["4px"]],
    ["4", ["8px"]],
  ])
  list = ["thin", "medium", "thick"]
  cssData = [
    new CssClassData("bor-wid", ["border-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-bot-wid", ["border-bottom-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-lef-wid", ["border-left-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rig-wid", ["border-right-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-top-wid", ["border-top-width"], this.list, this.cssClassToValuesMap),
  ]
}