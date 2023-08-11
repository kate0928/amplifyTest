/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderTestOverridesProps = {
    NavBarHeaderTest?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Amplify Mark"?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "\u9996\u9801"?: PrimitiveOverrideProps<TextProps>;
    "\u7522\u54C1"?: PrimitiveOverrideProps<TextProps>;
    "\u50F9\u683C"?: PrimitiveOverrideProps<TextProps>;
    "\u806F\u7D61\u6211\u5011"?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button39921537?: PrimitiveOverrideProps<ButtonProps>;
    Button39921538?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderTestProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderTestOverridesProps | undefined | null;
}>;
export default function NavBarHeaderTest(props: NavBarHeaderTestProps): React.ReactElement;
