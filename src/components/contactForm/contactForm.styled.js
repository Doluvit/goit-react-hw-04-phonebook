import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Container = styled(Form)`
  margin-bottom: 20px;
  padding: 20px;
  max-width: 50%;
  border: solid 2px transparent;
  border-radius: 5px;
  box-shadow: var(--mainBoxShadow);
`;

export const Section = styled.div`
  margin-bottom: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  `;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: var(--textColor);
 `;

export const Input = styled(Field)`
  padding: 5px 10px;

  font-size: 24px;
  color: var(--textColor);

  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: var(--insetBoxShadow);
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const FormButton = styled.button`
  padding: 10px 25px;

  font-size: 24px;
  font-weight: 500;
  color: var(--textColor);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--accentTextColor);
    background-color: var(--mainBackgroundColor);
  }
`;
