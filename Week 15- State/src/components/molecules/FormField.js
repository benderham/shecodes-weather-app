import React from 'react';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';

const FormField = ({ label, type, name, ...props }) => {
  return (
    <>
      <Label name={name}>{label}</Label>
      {type === 'text' && <TextInput name={name} />}
      {type === 'textarea' && <TextArea name={name} />}
    </>
  );
};

export default FormField;
