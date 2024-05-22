import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import CssvilleColors from "../vars/colors"

export class BorderColorGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ...CssvilleColors.colorsPalettePostfixValues,
  ])
  list = ["transparent"]
  cssData = [
    new CssClassData("bor-col", ["border-color"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-bot-col", ["border-bottom-color"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-lef-col", ["border-left-color"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rig-col", ["border-right-color"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-top-col", ["border-top-color"], this.list, this.cssClassToValuesMap),
  ]
}