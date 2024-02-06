import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class LeftGenerator extends Generator {
  list = ["0", "auto", "inherit", "initial"];
  cssData = [
    new CssClassData("left", ["left"], this.list),
  ];
}