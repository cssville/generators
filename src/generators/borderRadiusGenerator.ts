import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class BorderRadiusGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["0", ["0px"]],
    ["1", ["2px"]],
    ["2", ["4px"]],
    ["3", ["8px"]],
    ["4", ["12px"]],
    ["5", ["16px"]],
    ["6", ["24px"]],
    ["7", ["32px"]],
    ["8", ["40px"]],
    ["9", ["48px"]],
    ["10", ["64px"]],
    ["11", ["80px"]],
    ["12", ["96px"]],
    ["max", ["9999px"]],
  ])
  list = ["inherit", "9999px"]
  cssData = [
    new CssClassData("bor-rad", ["-ms-border-radius", "border-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-top-lef", ["-ms-border-top-left-radius", "border-top-left-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-top-rig", ["-ms-border-top-right-radius", "border-top-right-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-bot-rig", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], this.list, this.cssClassToValuesMap),
    new CssClassData("bor-rad-bot-lef", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], this.list, this.cssClassToValuesMap)
  ]
}