import React from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const ComplaintForm = props => {
  return (
    <div>
      <form>
        <FormField type="text" name="name" label="Name" />
        <FormField type="text" name="email" label="Email Address" />
        <FormField type="textarea" name="message" label="Message" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ComplaintForm;
