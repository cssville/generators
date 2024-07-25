import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"
import CssvilleBreakpoints from "../vars/breakpoints"

export class WidthGenerator extends Generator {
  cssClassToValuesMap = new Map([
    ["1/12", ["8.333%"]],
    ["2/12", ["16.666%"]],
    ["1/6", ["16.666%"]],
    ["3/12", ["25%"]],
    ["1/4", ["25%"]],
    ["4/12", ["33.333%"]],
    ["1/3", ["33.333%"]],
    ["5/12", ["41.666%"]],
    ["6/12", ["50%"]],
    ["1/2", ["50%"]],
    ["7/12", ["58.333%"]],
    ["8/12", ["66.666%"]],
    ["2/3", ["66.666%"]],
    ["9/12", ["75%"]],
    ["3/4", ["75%"]],
    ["10/12", ["83.333%"]],
    ["5/6", ["83.333%"]],
    ["11/12", ["91.666%"]],
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
    ["xs", [CssvilleBreakpoints.xs.var]],
    ["sm", [CssvilleBreakpoints.sm.var]],
    ["md", [CssvilleBreakpoints.md.var]],
    ["lg", [CssvilleBreakpoints.lg.var]],
    ["xl", [CssvilleBreakpoints.xl.var]],
  ])
  list = ["max-content", "min-content", "fit-content", "inherit", "initial", "revert", "unset"]
  cssData = [
    new CssClassData("wid", ["width"], this.list, this.cssClassToValuesMap),
    new CssClassData("max-wid", ["max-width"], this.list, this.cssClassToValuesMap),
    new CssClassData("min-wid", ["min-width"], this.list, this.cssClassToValuesMap)
  ]
}