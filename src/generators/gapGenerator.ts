import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class GapGenerator extends Generator {
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
    new CssClassData("gap", ["gap"], this.list, this.cssClassToValuesMap),
    new CssClassData("col-gap", ["column-gap"], this.list, this.cssClassToValuesMap),
    new CssClassData("row-gap", ["row-gap"], this.list, this.cssClassToValuesMap),
  ]
}