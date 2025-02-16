import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Product } from "./graphql/types";
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
export declare type ProductUpdateFormInputValues = {
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
    status?: string;
};
export declare type ProductUpdateFormValidationValues = {
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
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductUpdateFormOverridesProps = {
    ProductUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    product?: Product;
    onSubmit?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onSuccess?: (fields: ProductUpdateFormInputValues) => void;
    onError?: (fields: ProductUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductUpdateFormInputValues) => ProductUpdateFormInputValues;
    onValidate?: ProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductUpdateForm(props: ProductUpdateFormProps): React.ReactElement;
