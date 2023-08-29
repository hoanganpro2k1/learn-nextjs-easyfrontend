import React from 'react'
import { TextField, TextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';

type InputFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  });
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}

      fullWidth
      margin='normal'
      size='small'
      {...rest}
    />
  );
};

export default InputField;
