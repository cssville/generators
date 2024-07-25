import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class HeightGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["100", ["100%"]],
    ["full", ["100%"]],
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
  list = ["auto", "max-content", "min-content", "100vh", "inherit", "initial", "revert", "unset"]
  cssData = [
    new CssClassData("hei", ["height"], this.list, this.cssClassToValuesMap),
    new CssClassData("max-hei", ["max-height"], this.list, this.cssClassToValuesMap),
    new CssClassData("min-hei", ["min-height"], this.list, this.cssClassToValuesMap)
  ]
}