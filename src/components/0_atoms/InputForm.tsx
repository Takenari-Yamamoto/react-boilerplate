/** @jsxImportSource @emotion/react */
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { ChangeEvent, memo, useRef } from 'react';

// type InputProps = {
//   label: string;
//   value: string;
//   handleChange: (e: string) => void;
// };

type CustomProp = {
  handleChange: (e: string) => void;
};
type InputProp = JSX.IntrinsicElements['input'];
type MuiProp = TextFieldProps;
type Prop = CustomProp & InputProp & MuiProp;

const InputForm = (props: Prop) => {
  const { handleChange, value, ...otherProp } = props;
  // FIX: 再レンダリングさせないようにしたい
  const ref = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!ref.current?.value) {
      return;
    }
    handleChange(ref.current.value);
  };

  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      inputRef={ref}
      onChange={onChange}
      {...otherProp}
    />
  );
};

export default memo(InputForm);
