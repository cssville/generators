import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class GapGenerator extends Generator {
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
  ]);
  list = ["inherit"];
  cssData = [
    new CssClassData("gap", ["gap"], this.list, this.cssClassToValuesMap),
    new CssClassData("column-gap", ["column-gap"], this.list, this.cssClassToValuesMap),
    new CssClassData("row-gap", ["row-gap"], this.list, this.cssClassToValuesMap),
  ];
}