import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class ZIndexGenerator extends Generator {
  cssData = [
    new CssClassData("z-ind", ["z-index"],
      ["auto", "0", "-1", "-2", "-3", "-4", "-5", "1", "2", "3", "4", "5", "10", "100", "1000", "9999"]
    )
  ]
}