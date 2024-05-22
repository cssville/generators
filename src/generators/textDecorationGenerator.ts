import { CssClassData } from "../data/cssClassData"
import { Generator } from "../Generator"

export class TextDecorationGenerator extends Generator {
  cssData = [
    new CssClassData("tex-dec", ["text-decoration"],
      ["underline", "overline", "none", "inherit", "initial", "revert", "unset"])
  ];
}