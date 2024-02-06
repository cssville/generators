import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class RightGenerator extends Generator {
  list = ["0", "auto", "inherit", "initial"];
  cssData = [
    new CssClassData("right", ["right"], this.list),
  ];
}