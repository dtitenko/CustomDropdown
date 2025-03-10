/**
 * This file was generated from CustomDropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export interface CustomDropdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    defaultValue?: ListValue;
    options: ListValue;
    firstLabel: ListAttributeValue<string>;
    secondLabel: ListAttributeValue<string>;
    imgUrl: ListAttributeValue<string>;
    contextObjLabel: EditableValue<string>;
    contextObjForceRefresh?: EditableValue<BigJs.Big | string | boolean>;
    selectOption?: ActionValue;
    enableCreate: boolean;
    createValue?: ActionValue;
    enableClear: boolean;
    clearValue?: ActionValue;
    enableSearch: boolean;
    useDefaultStyle: boolean;
    useAvatar: boolean;
    placeholder: string;
    className: string;
    classNamePrefix: string;
    menuHeight: number;
}

export interface CustomDropdownPreviewProps {
    class: string;
    style: string;
    defaultValue: {} | null;
    options: {} | null;
    firstLabel: string;
    secondLabel: string;
    imgUrl: string;
    contextObjLabel: string;
    contextObjForceRefresh: string;
    selectOption: {} | null;
    enableCreate: boolean;
    createValue: {} | null;
    enableClear: boolean;
    clearValue: {} | null;
    enableSearch: boolean;
    useDefaultStyle: boolean;
    useAvatar: boolean;
    placeholder: string;
    className: string;
    classNamePrefix: string;
    menuHeight: number | null;
}
