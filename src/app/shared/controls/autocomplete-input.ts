import { ControlBase } from "./control-base";

export class AutoCompleteInput extends ControlBase<string> {
    override controlType = 'autocomplete';
}