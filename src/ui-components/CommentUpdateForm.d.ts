import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Comment } from "./graphql/types";
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
export declare type CommentUpdateFormInputValues = {
    author?: string;
    content?: string;
};
export declare type CommentUpdateFormValidationValues = {
    author?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommentUpdateFormOverridesProps = {
    CommentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    author?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommentUpdateFormProps = React.PropsWithChildren<{
    overrides?: CommentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comment?: Comment;
    onSubmit?: (fields: CommentUpdateFormInputValues) => CommentUpdateFormInputValues;
    onSuccess?: (fields: CommentUpdateFormInputValues) => void;
    onError?: (fields: CommentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommentUpdateFormInputValues) => CommentUpdateFormInputValues;
    onValidate?: CommentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CommentUpdateForm(props: CommentUpdateFormProps): React.ReactElement;
