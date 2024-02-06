import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class TopGenerator extends Generator {
  list = ["0", "auto", "inherit", "initial"];
  cssData = [
    new CssClassData("top", ["top"], this.list),
  ];
}