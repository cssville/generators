import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";
import CssvilleColors from "./../vars/colors";

export class BackgroundColorGenerator extends Generator {
  cssData = [
    new CssClassData("bac-col", ["background-color"],
      ["black", "white", "transparent", "inherit", "initial", "revert", "unset"],
      new Map([
        ...CssvilleColors.colorsPalettePostfixValues,
      ]))
  ];
}