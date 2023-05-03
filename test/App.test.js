// Tekijä Ari Tenhunen
import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Card from '../src/components/User/Register';


test('is sign in choose in right form', () => {
  const component = renderer.create(
      <Card page="http://www.facebook.com">Facebook</Card>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('is sign in choose2 in right form', () => {
  const component = renderer.create(
      <Card page="http://www.gmail.com">GMAIL</Card>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('is email in right form', () => {
  const inputEl = screen.getByTestId("email-input");
  userEvent.type(inputEl, "test@mail.com");
  expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
});


test("Add Kayttaja POST /kayttaja",async () => {
  const response = renderer.create({
    sahkoposti: process.env.CUSTOMER_EMAIL,
    salasana: process.env.CUSTOMER_PASSWORD
  });
  await response.save();
  expect(response.sahkoposti).toBe(process.env.CUSTOMER_PASSWORD);
  expect(response.salasana).toBe(process.env.CUSTOMER_PASSWORD);
});

