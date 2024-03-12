import { CssClassData } from "../data/cssClassData";
import { Generator } from "../Generator";

export class BoxSizingGenerator extends Generator {
    list = ["content-box", "border-box"];
    cssData = [
        new CssClassData("box-sizing", ["box-sizing"], this.list, this.cssClassToValuesMap),
    ];
}