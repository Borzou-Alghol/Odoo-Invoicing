/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getProduct } from "./graphql/queries";
import { updateProduct } from "./graphql/mutations";
const client = generateClient();
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    EAN: "",
    nationalRefundLogo: "",
    saRefundLogo: "",
    glassColour: "",
    petClour: "",
    designatedCapacityMl: "",
    heightMM: "",
    diameterMM: "",
    weightGM: "",
    productGroupOther: "",
    glassColourOther: "",
    multiSchemeId: "",
    supplierParticipantId: "",
    effectiveFrom: "",
    effectiveTo: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [EAN, setEAN] = React.useState(initialValues.EAN);
  const [nationalRefundLogo, setNationalRefundLogo] = React.useState(
    initialValues.nationalRefundLogo
  );
  const [saRefundLogo, setSaRefundLogo] = React.useState(
    initialValues.saRefundLogo
  );
  const [glassColour, setGlassColour] = React.useState(
    initialValues.glassColour
  );
  const [petClour, setPetClour] = React.useState(initialValues.petClour);
  const [designatedCapacityMl, setDesignatedCapacityMl] = React.useState(
    initialValues.designatedCapacityMl
  );
  const [heightMM, setHeightMM] = React.useState(initialValues.heightMM);
  const [diameterMM, setDiameterMM] = React.useState(initialValues.diameterMM);
  const [weightGM, setWeightGM] = React.useState(initialValues.weightGM);
  const [productGroupOther, setProductGroupOther] = React.useState(
    initialValues.productGroupOther
  );
  const [glassColourOther, setGlassColourOther] = React.useState(
    initialValues.glassColourOther
  );
  const [multiSchemeId, setMultiSchemeId] = React.useState(
    initialValues.multiSchemeId
  );
  const [supplierParticipantId, setSupplierParticipantId] = React.useState(
    initialValues.supplierParticipantId
  );
  const [effectiveFrom, setEffectiveFrom] = React.useState(
    initialValues.effectiveFrom
  );
  const [effectiveTo, setEffectiveTo] = React.useState(
    initialValues.effectiveTo
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setName(cleanValues.name);
    setEAN(cleanValues.EAN);
    setNationalRefundLogo(cleanValues.nationalRefundLogo);
    setSaRefundLogo(cleanValues.saRefundLogo);
    setGlassColour(cleanValues.glassColour);
    setPetClour(cleanValues.petClour);
    setDesignatedCapacityMl(cleanValues.designatedCapacityMl);
    setHeightMM(cleanValues.heightMM);
    setDiameterMM(cleanValues.diameterMM);
    setWeightGM(cleanValues.weightGM);
    setProductGroupOther(cleanValues.productGroupOther);
    setGlassColourOther(cleanValues.glassColourOther);
    setMultiSchemeId(cleanValues.multiSchemeId);
    setSupplierParticipantId(cleanValues.supplierParticipantId);
    setEffectiveFrom(cleanValues.effectiveFrom);
    setEffectiveTo(cleanValues.effectiveTo);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProduct.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProduct
        : productModelProp;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [],
    EAN: [{ type: "Required" }],
    nationalRefundLogo: [],
    saRefundLogo: [],
    glassColour: [],
    petClour: [],
    designatedCapacityMl: [],
    heightMM: [],
    diameterMM: [],
    weightGM: [],
    productGroupOther: [],
    glassColourOther: [],
    multiSchemeId: [],
    supplierParticipantId: [],
    effectiveFrom: [],
    effectiveTo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          EAN,
          nationalRefundLogo: nationalRefundLogo ?? null,
          saRefundLogo: saRefundLogo ?? null,
          glassColour: glassColour ?? null,
          petClour: petClour ?? null,
          designatedCapacityMl: designatedCapacityMl ?? null,
          heightMM: heightMM ?? null,
          diameterMM: diameterMM ?? null,
          weightGM: weightGM ?? null,
          productGroupOther: productGroupOther ?? null,
          glassColourOther: glassColourOther ?? null,
          multiSchemeId: multiSchemeId ?? null,
          supplierParticipantId: supplierParticipantId ?? null,
          effectiveFrom: effectiveFrom ?? null,
          effectiveTo: effectiveTo ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                id: productRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Ean"
        isRequired={true}
        isReadOnly={false}
        value={EAN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN: value,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.EAN ?? value;
          }
          if (errors.EAN?.hasError) {
            runValidationTasks("EAN", value);
          }
          setEAN(value);
        }}
        onBlur={() => runValidationTasks("EAN", EAN)}
        errorMessage={errors.EAN?.errorMessage}
        hasError={errors.EAN?.hasError}
        {...getOverrideProps(overrides, "EAN")}
      ></TextField>
      <TextField
        label="National refund logo"
        isRequired={false}
        isReadOnly={false}
        value={nationalRefundLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo: value,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.nationalRefundLogo ?? value;
          }
          if (errors.nationalRefundLogo?.hasError) {
            runValidationTasks("nationalRefundLogo", value);
          }
          setNationalRefundLogo(value);
        }}
        onBlur={() =>
          runValidationTasks("nationalRefundLogo", nationalRefundLogo)
        }
        errorMessage={errors.nationalRefundLogo?.errorMessage}
        hasError={errors.nationalRefundLogo?.hasError}
        {...getOverrideProps(overrides, "nationalRefundLogo")}
      ></TextField>
      <TextField
        label="Sa refund logo"
        isRequired={false}
        isReadOnly={false}
        value={saRefundLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo: value,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.saRefundLogo ?? value;
          }
          if (errors.saRefundLogo?.hasError) {
            runValidationTasks("saRefundLogo", value);
          }
          setSaRefundLogo(value);
        }}
        onBlur={() => runValidationTasks("saRefundLogo", saRefundLogo)}
        errorMessage={errors.saRefundLogo?.errorMessage}
        hasError={errors.saRefundLogo?.hasError}
        {...getOverrideProps(overrides, "saRefundLogo")}
      ></TextField>
      <TextField
        label="Glass colour"
        isRequired={false}
        isReadOnly={false}
        value={glassColour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour: value,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.glassColour ?? value;
          }
          if (errors.glassColour?.hasError) {
            runValidationTasks("glassColour", value);
          }
          setGlassColour(value);
        }}
        onBlur={() => runValidationTasks("glassColour", glassColour)}
        errorMessage={errors.glassColour?.errorMessage}
        hasError={errors.glassColour?.hasError}
        {...getOverrideProps(overrides, "glassColour")}
      ></TextField>
      <TextField
        label="Pet clour"
        isRequired={false}
        isReadOnly={false}
        value={petClour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour: value,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.petClour ?? value;
          }
          if (errors.petClour?.hasError) {
            runValidationTasks("petClour", value);
          }
          setPetClour(value);
        }}
        onBlur={() => runValidationTasks("petClour", petClour)}
        errorMessage={errors.petClour?.errorMessage}
        hasError={errors.petClour?.hasError}
        {...getOverrideProps(overrides, "petClour")}
      ></TextField>
      <TextField
        label="Designated capacity ml"
        isRequired={false}
        isReadOnly={false}
        value={designatedCapacityMl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl: value,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.designatedCapacityMl ?? value;
          }
          if (errors.designatedCapacityMl?.hasError) {
            runValidationTasks("designatedCapacityMl", value);
          }
          setDesignatedCapacityMl(value);
        }}
        onBlur={() =>
          runValidationTasks("designatedCapacityMl", designatedCapacityMl)
        }
        errorMessage={errors.designatedCapacityMl?.errorMessage}
        hasError={errors.designatedCapacityMl?.hasError}
        {...getOverrideProps(overrides, "designatedCapacityMl")}
      ></TextField>
      <TextField
        label="Height mm"
        isRequired={false}
        isReadOnly={false}
        value={heightMM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM: value,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.heightMM ?? value;
          }
          if (errors.heightMM?.hasError) {
            runValidationTasks("heightMM", value);
          }
          setHeightMM(value);
        }}
        onBlur={() => runValidationTasks("heightMM", heightMM)}
        errorMessage={errors.heightMM?.errorMessage}
        hasError={errors.heightMM?.hasError}
        {...getOverrideProps(overrides, "heightMM")}
      ></TextField>
      <TextField
        label="Diameter mm"
        isRequired={false}
        isReadOnly={false}
        value={diameterMM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM: value,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.diameterMM ?? value;
          }
          if (errors.diameterMM?.hasError) {
            runValidationTasks("diameterMM", value);
          }
          setDiameterMM(value);
        }}
        onBlur={() => runValidationTasks("diameterMM", diameterMM)}
        errorMessage={errors.diameterMM?.errorMessage}
        hasError={errors.diameterMM?.hasError}
        {...getOverrideProps(overrides, "diameterMM")}
      ></TextField>
      <TextField
        label="Weight gm"
        isRequired={false}
        isReadOnly={false}
        value={weightGM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM: value,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.weightGM ?? value;
          }
          if (errors.weightGM?.hasError) {
            runValidationTasks("weightGM", value);
          }
          setWeightGM(value);
        }}
        onBlur={() => runValidationTasks("weightGM", weightGM)}
        errorMessage={errors.weightGM?.errorMessage}
        hasError={errors.weightGM?.hasError}
        {...getOverrideProps(overrides, "weightGM")}
      ></TextField>
      <TextField
        label="Product group other"
        isRequired={false}
        isReadOnly={false}
        value={productGroupOther}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther: value,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.productGroupOther ?? value;
          }
          if (errors.productGroupOther?.hasError) {
            runValidationTasks("productGroupOther", value);
          }
          setProductGroupOther(value);
        }}
        onBlur={() =>
          runValidationTasks("productGroupOther", productGroupOther)
        }
        errorMessage={errors.productGroupOther?.errorMessage}
        hasError={errors.productGroupOther?.hasError}
        {...getOverrideProps(overrides, "productGroupOther")}
      ></TextField>
      <TextField
        label="Glass colour other"
        isRequired={false}
        isReadOnly={false}
        value={glassColourOther}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther: value,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.glassColourOther ?? value;
          }
          if (errors.glassColourOther?.hasError) {
            runValidationTasks("glassColourOther", value);
          }
          setGlassColourOther(value);
        }}
        onBlur={() => runValidationTasks("glassColourOther", glassColourOther)}
        errorMessage={errors.glassColourOther?.errorMessage}
        hasError={errors.glassColourOther?.hasError}
        {...getOverrideProps(overrides, "glassColourOther")}
      ></TextField>
      <TextField
        label="Multi scheme id"
        isRequired={false}
        isReadOnly={false}
        value={multiSchemeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId: value,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.multiSchemeId ?? value;
          }
          if (errors.multiSchemeId?.hasError) {
            runValidationTasks("multiSchemeId", value);
          }
          setMultiSchemeId(value);
        }}
        onBlur={() => runValidationTasks("multiSchemeId", multiSchemeId)}
        errorMessage={errors.multiSchemeId?.errorMessage}
        hasError={errors.multiSchemeId?.hasError}
        {...getOverrideProps(overrides, "multiSchemeId")}
      ></TextField>
      <TextField
        label="Supplier participant id"
        isRequired={false}
        isReadOnly={false}
        value={supplierParticipantId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId: value,
              effectiveFrom,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.supplierParticipantId ?? value;
          }
          if (errors.supplierParticipantId?.hasError) {
            runValidationTasks("supplierParticipantId", value);
          }
          setSupplierParticipantId(value);
        }}
        onBlur={() =>
          runValidationTasks("supplierParticipantId", supplierParticipantId)
        }
        errorMessage={errors.supplierParticipantId?.errorMessage}
        hasError={errors.supplierParticipantId?.hasError}
        {...getOverrideProps(overrides, "supplierParticipantId")}
      ></TextField>
      <TextField
        label="Effective from"
        isRequired={false}
        isReadOnly={false}
        value={effectiveFrom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom: value,
              effectiveTo,
            };
            const result = onChange(modelFields);
            value = result?.effectiveFrom ?? value;
          }
          if (errors.effectiveFrom?.hasError) {
            runValidationTasks("effectiveFrom", value);
          }
          setEffectiveFrom(value);
        }}
        onBlur={() => runValidationTasks("effectiveFrom", effectiveFrom)}
        errorMessage={errors.effectiveFrom?.errorMessage}
        hasError={errors.effectiveFrom?.hasError}
        {...getOverrideProps(overrides, "effectiveFrom")}
      ></TextField>
      <TextField
        label="Effective to"
        isRequired={false}
        isReadOnly={false}
        value={effectiveTo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              EAN,
              nationalRefundLogo,
              saRefundLogo,
              glassColour,
              petClour,
              designatedCapacityMl,
              heightMM,
              diameterMM,
              weightGM,
              productGroupOther,
              glassColourOther,
              multiSchemeId,
              supplierParticipantId,
              effectiveFrom,
              effectiveTo: value,
            };
            const result = onChange(modelFields);
            value = result?.effectiveTo ?? value;
          }
          if (errors.effectiveTo?.hasError) {
            runValidationTasks("effectiveTo", value);
          }
          setEffectiveTo(value);
        }}
        onBlur={() => runValidationTasks("effectiveTo", effectiveTo)}
        errorMessage={errors.effectiveTo?.errorMessage}
        hasError={errors.effectiveTo?.hasError}
        {...getOverrideProps(overrides, "effectiveTo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || productModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
