import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import {
  Container,
  Input,
  Label,
  Section,
  ErrorMsg,
  FormButton,
} from './contactForm.styled.js';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).required(),
});

const inValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={inValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Container autoComplete="off">
          <Section>
            <Label htmlFor="name">Name:</Label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="Example: John Snow"
            />
            <ErrorMsg name="name" component="div" />
          </Section>

          <Section>
            <Label htmlFor="number">Number:</Label>
            <Input
              name="number"
              type="tel"
              id="number"
              pattern="^\d{3}-\d{2}-\d{2}$"
              placeholder="Example: 777-77-77"
            />
            <ErrorMsg name="number" component="div" />
          </Section>

          <FormButton type="submit">Add contact</FormButton>
        </Container>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
