/** @jsxImportSource @emotion/react */
import TextField from '@mui/material/TextField';
import { memo } from 'react';

type Props = {
  label: string;
  value: string;
  handleChange: (e: string) => void;
};

const InputForm = (props: Props) => {
  const { label, value, handleChange } = props;
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default memo(InputForm);
