import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import ThemeColors from "../vars/themeColors"

export class BorderGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["1", [`1px solid ${ThemeColors.border.var}`]],
    ["2", [`2px solid ${ThemeColors.border.var}`]],
    ["3", [`3px solid ${ThemeColors.border.var}`]],
  ])
  list = ["none"]
  cssData = [
    new CssClassData("bor", ["border"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-top", ["border-top"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-bot", ["border-bottom"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-lef", ["border-left"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rig", ["border-right"], this.list, this.cssClassToValuesMap),
  ]
}