import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import * as S from "./styles.js";
import { Form, withContextForm, Submit } from "formcat";
import {
  InputField,
  TextField,
  SelectField,
  RadiosField,
  CheckboxField
} from "formcat/fields";
import GlobalStyle from "./globals.styles.js";

//function to validate the password input
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//functions to validate the username and password
const Input = withContextForm(({ error, ...input }) => (
  <>
    <input {...input} />
    {error && <small>Username not valid!</small>}
  </>
));

const Password = withContextForm(({ error, ...input }) => (
  <>
    <input {...input} type="password" />
    {error && <small>Password not valid!</small>}
  </>
));

function App() {
   // Password length must to be greater than 8
  const passwordValidation = value => value.length > 8;
  const [submitData, setSubmitData] = useState("");
  const form = useRef(null);

  const onSubmit = ({ data }) => {
    setSubmitData(JSON.stringify(data, undefined, 2));
  };

  const onPopulate = e => {
    e.preventDefault();
    form.current.updateFieldValue("first_name", faker.name.firstName());
    form.current.updateFieldValue("last_name", faker.name.lastName());
    form.current.updateFieldValue("email", faker.internet.email());
    form.current.updateFieldValue("password", faker.internet.password());
    form.current.updateFieldValue("occupation", "fullstack");
    form.current.updateFieldValue("about", faker.lorem.paragraph(1));
    form.current.updateFieldValue("time_as_developer", "3-5");
  };

  return (
    <S.Container>
     
      <h1>Example full form</h1>
      <Form keyUpValidation onSubmit={onSubmit} ref={form}>
        
        <S.Field>
          <Input InputField Placeholder="Firstname" name="first_name" required />
        </S.Field>

        <S.Field>
          <Input InputField Placeholder="Lastname" name="last_name" required />
        </S.Field>

        <S.Field>
          < InputField label="Email" name="email" required  validations={[validateEmail]}/>
        </S.Field>

        <S.Field>
          <Password
            Placeholder="Password"
            name="password"
            type="password"
            required
            validations={[passwordValidation]}
          />
        </S.Field>

        <S.Field>
          <SelectField
            label="Choose your occupation"
            name="occupation"
            required
            options={[
              { label: "---", value: "" },
              { label: "Frontend Developer", value: "frontend" },
              { label: "Backend Developer", value: "backend" },
              { label: "Fullstack Developer", value: "fullstack" },
              { label: "Other", value: "other" }
            ]}
          />
        </S.Field>

        <S.Field>
          <RadiosField
            label="How many time do you work as developer?"
            name="time_as_developer"
            required
            options={[
              { label: "1 - 3 years", value: "1-3" },
              { label: "3 - 5 years", value: "3-5" },
              { label: "+5 years", value: "+5" }
            ]}
          />
        </S.Field>

        <S.Field>
          <TextField label="Say something about you" name="about" rows="10" />
        </S.Field>

        <CheckboxField
          label="I'm agree to send my informations"
          name="agree"
          required
        />

        <S.Buttons>
          <S.Populate onClick={onPopulate}>Populate Fields</S.Populate>
          <Submit>Send</Submit>
        </S.Buttons>
      </Form>

      <S.Code>
        <p>Submit data:</p>
        {submitData}
      </S.Code>
    </S.Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    
    <GlobalStyle />
    <App />
    
  </>,
  rootElement
);

export default App;