import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class MarginGenerator extends Generator {
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
    ["-1", ["-2px"]],
    ["-2", ["-4px"]],
    ["-3", ["-8px"]],
    ["-4", ["-12px"]],
    ["-5", ["-16px"]],
    ["-6", ["-24px"]],
    ["-7", ["-32px"]],
    ["-8", ["-40px"]],
    ["-9", ["-48px"]],
    ["-10", ["-64px"]],
    ["-11", ["-80px"]],
    ["-12", ["-96px"]],
  ])
  list = ["auto", "inherit"]
  cssData = [
    new CssClassData("mar", ["margin"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-top", ["margin-top"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-bot", ["margin-bottom"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-lef", ["margin-left"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-rig", ["margin-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-x", ["margin-left", "margin-right"], this.list, this.cssClassToValuesMap),
    new CssClassData("mar-y", ["margin-top", "margin-bottom"], this.list, this.cssClassToValuesMap),
  ]
}