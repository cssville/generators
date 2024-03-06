import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class GapGenerator extends Generator {
  list = ["inherit", "0px", "1px", "2px", "4px", "8px", "12px",
    "16px", "24px", "32px", "40px", "48px", "64px", "80px", "96px"];
  cssData = [
    new CssClassData("gap", ["gap"], this.list),
    new CssClassData("column-gap", ["column-gap"], this.list),
    new CssClassData("row-gap", ["row-gap"], this.list),
  ];
}