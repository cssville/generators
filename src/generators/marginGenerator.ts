import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class MarginGenerator extends Generator {
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

    ["-1", ["-1px"]],
    ["-2", ["-2px"]],
    ["-3", ["-4px"]],
    ["-4", ["-8px"]],
    ["-5", ["-12px"]],
    ["-6", ["-16px"]],
    ["-7", ["-24px"]],
    ["-8", ["-32px"]],
    ["-9", ["-40px"]],
    ["-10", ["-48px"]],
    ["-11", ["-64px"]],
    ["-12", ["-80px"]],
    ["-13", ["-96px"]],
    ["-14", ["-112px"]],
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