import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class BottomGenerator extends Generator {
  list = ["0", "auto", "inherit", "initial"];
  cssData = [
    new CssClassData("bottom", ["bottom"], this.list),
  ];
}