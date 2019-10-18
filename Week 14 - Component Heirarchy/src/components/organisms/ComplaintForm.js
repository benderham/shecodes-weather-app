import React from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const ComplaintForm = props => {
  return (
    <div>
      <form>
        <FormField type="text" />
        <FormField type="text" />
        <FormField type="textarea" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ComplaintForm;
