import { ControlBase } from "./control-base";

export class TextInput extends ControlBase<string> {
    override controlType = 'text';
}