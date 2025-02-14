import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCreateFormInputValues = {
    name?: string;
    EAN?: string;
    nationalRefundLogo?: string;
    saRefundLogo?: string;
    glassColour?: string;
    petClour?: string;
    designatedCapacityMl?: string;
    heightMM?: string;
    diameterMM?: string;
    weightGM?: string;
    productGroupOther?: string;
    glassColourOther?: string;
    multiSchemeId?: string;
    supplierParticipantId?: string;
    effectiveFrom?: string;
    effectiveTo?: string;
};
export declare type ProductCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    EAN?: ValidationFunction<string>;
    nationalRefundLogo?: ValidationFunction<string>;
    saRefundLogo?: ValidationFunction<string>;
    glassColour?: ValidationFunction<string>;
    petClour?: ValidationFunction<string>;
    designatedCapacityMl?: ValidationFunction<string>;
    heightMM?: ValidationFunction<string>;
    diameterMM?: ValidationFunction<string>;
    weightGM?: ValidationFunction<string>;
    productGroupOther?: ValidationFunction<string>;
    glassColourOther?: ValidationFunction<string>;
    multiSchemeId?: ValidationFunction<string>;
    supplierParticipantId?: ValidationFunction<string>;
    effectiveFrom?: ValidationFunction<string>;
    effectiveTo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    EAN?: PrimitiveOverrideProps<TextFieldProps>;
    nationalRefundLogo?: PrimitiveOverrideProps<TextFieldProps>;
    saRefundLogo?: PrimitiveOverrideProps<TextFieldProps>;
    glassColour?: PrimitiveOverrideProps<TextFieldProps>;
    petClour?: PrimitiveOverrideProps<TextFieldProps>;
    designatedCapacityMl?: PrimitiveOverrideProps<TextFieldProps>;
    heightMM?: PrimitiveOverrideProps<TextFieldProps>;
    diameterMM?: PrimitiveOverrideProps<TextFieldProps>;
    weightGM?: PrimitiveOverrideProps<TextFieldProps>;
    productGroupOther?: PrimitiveOverrideProps<TextFieldProps>;
    glassColourOther?: PrimitiveOverrideProps<TextFieldProps>;
    multiSchemeId?: PrimitiveOverrideProps<TextFieldProps>;
    supplierParticipantId?: PrimitiveOverrideProps<TextFieldProps>;
    effectiveFrom?: PrimitiveOverrideProps<TextFieldProps>;
    effectiveTo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
