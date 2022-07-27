/** @jsxImportSource @emotion/react */
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ChangeEvent, memo, useRef } from 'react';
import { useForm } from 'react-hook-form';

type CustomProp = {
  handleChange: (e: string) => void;
};
type InputProp = JSX.IntrinsicElements['input'];
type MuiProp = TextFieldProps;
type Prop = CustomProp & InputProp & MuiProp;

// FIX: 再レンダリングさせないようにしたい
const InputForm = (props: Prop) => {
  const { handleChange, value, ...otherProp } = props;
  const { register } = useForm();
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!ref.current?.value) {
      return;
    }
    handleChange(ref.current.value);
  };

  return (
    <TextField
      {...register('name')}
      onChange={onChange}
      id="outlined-basic"
      variant="outlined"
      inputRef={ref}
      {...otherProp}
    />
  );
};

export default memo(InputForm);
