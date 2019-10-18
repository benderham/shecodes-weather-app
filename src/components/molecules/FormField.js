import React from 'react';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';

const FormField = ({ type, ...props }) => {
  return (
    <>
      <Label>Form Label</Label>
      {type === 'text' && <TextInput />}
      {type === 'textarea' && <TextArea />}
    </>
  );
};

export default FormField;
