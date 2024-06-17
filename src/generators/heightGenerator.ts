import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class HeightGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["100", ["100%"]],
    ["full", ["100%"]],
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
  list = ["auto", "max-content", "min-content", "100vh", "inherit", "initial", "revert", "unset"]
  cssData = [
    new CssClassData("hei", ["height"], this.list, this.cssClassToValuesMap),
    new CssClassData("max-hei", ["max-height"], this.list, this.cssClassToValuesMap),
    new CssClassData("min-hei", ["min-height"], this.list, this.cssClassToValuesMap)
  ]
}