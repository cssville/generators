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
    ["4/5", ["83.333%"]],
    ["11/12", ["91.666%"]],
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