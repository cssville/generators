import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class LeftGenerator extends Generator {
  cssData = [
    new CssClassData("lef", ["left"],
      ["0", "auto", "inherit", "initial"]),
  ]
}