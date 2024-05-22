import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class PaddingGenerator extends Generator {
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
  ])
  list = ["inherit"]
  cssData = [
    new CssClassData("pad", ["padding"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-top", ["padding-top"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-bot", ["padding-bottom"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-lef", ["padding-left"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-rig", ["padding-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-x", ["padding-left", "padding-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("pad-y", ["padding-top", "padding-bottom"], this.list, this.cssClassToValuesMap),
  ]
}