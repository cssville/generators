import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class PaddingGenerator extends Generator {
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