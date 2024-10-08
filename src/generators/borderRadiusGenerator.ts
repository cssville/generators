import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderRadiusGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["0", ["0px"]],
    ["1", ["1px"]],
    ["2", ["2px"]],
    ["3", ["4px"]],
    ["4", ["8px"]],
    ["5", ["12px"]],
    ["6", ["16px"]],
    ["7", ["24px"]],
    ["8", ["32px"]],
    ["9", ["40px"]],
    ["10", ["48px"]],
    ["11", ["64px"]],
    ["12", ["80px"]],
    ["13", ["96px"]],
    ["14", ["112px"]],
    ["max", ["9999px"]],
  ])
  list = ["inherit", "9999px"]
  cssData = [
    new CssClassData("bor-rad", ["border-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-top-lef", ["border-top-left-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-top-rig", ["border-top-right-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-bot-rig", ["border-bottom-right-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-bot-lef", ["border-bottom-left-radius"], this.list, this.cssClassToValuesMap)
  ]
}