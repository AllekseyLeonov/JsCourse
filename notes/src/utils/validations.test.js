import { validateAuthInfo, validateRegistrationInfo } from "./validations";

it("Registrations validations should check if all the fields are filled", () => {
  const values = {
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  };

  const errors = validateRegistrationInfo(values);

  expect(errors.email).toBe("Required");
  expect(errors.firstName).toBe("Required");
  expect(errors.lastName).toBe("Required");
  expect(errors.dateOfBirth).toBe("Required");
  expect(errors.password).toBe("Required");
  expect(errors.confirmPassword).toBe("Required");
});

it("Registrations validations should check if email address is valid", () => {
  const values1 = { email: "login" };
  const values2 = { email: "login@" };
  const values3 = { email: "login.com" };
  const values4 = { email: "login@gmail.com" };

  const errors1 = validateRegistrationInfo(values1);
  const errors2 = validateRegistrationInfo(values2);
  const errors3 = validateRegistrationInfo(values3);
  const errors4 = validateRegistrationInfo(values4);

  expect(errors1.email).toBe("Invalid email address");
  expect(errors2.email).toBe("Invalid email address");
  expect(errors3.email).toBe("Invalid email address");
  expect(errors4.email).toBe(undefined);
});

it("Registrations validations should check if name and last name is valid", () => {
  const values1 = { firstName: "23", lastName: "23" };
  const values2 = { firstName: "&%", lastName: "*/" };
  const values3 = { firstName: "name", lastName: "surname" };
  const values4 = { firstName: "Name", lastName: "Surname" };

  const errors1 = validateRegistrationInfo(values1);
  const errors2 = validateRegistrationInfo(values2);
  const errors3 = validateRegistrationInfo(values3);
  const errors4 = validateRegistrationInfo(values4);

  expect(errors1.firstName).toBe("Invalid name input");
  expect(errors1.lastName).toBe("Invalid last name input");
  expect(errors2.firstName).toBe("Invalid name input");
  expect(errors2.lastName).toBe("Invalid last name input");
  expect(errors3.firstName).toBe(undefined);
  expect(errors3.lastName).toBe(undefined);
  expect(errors4.firstName).toBe(undefined);
  expect(errors4.lastName).toBe(undefined);
});

it("Registrations validations should check if password is valid", () => {
  const values1 = { password: "123" };
  const values2 = { password: "abc" };
  const values3 = { password: "123abc" };
  const values4 = { password: "123Abc" };

  const errors1 = validateRegistrationInfo(values1);
  const errors2 = validateRegistrationInfo(values2);
  const errors3 = validateRegistrationInfo(values3);
  const errors4 = validateRegistrationInfo(values4);

  expect(errors1.password).toBe(
    "Password must contain numbers," +
      " latin letters (lower- and uppercase)" +
      " and be at least 6 characters long"
  );
  expect(errors2.password).toBe(
    "Password must contain numbers," +
      " latin letters (lower- and uppercase)" +
      " and be at least 6 characters long"
  );
  expect(errors3.password).toBe(
    "Password must contain numbers," +
      " latin letters (lower- and uppercase)" +
      " and be at least 6 characters long"
  );
  expect(errors4.password).toBe(undefined);
});

it("Registrations validations should check if confirming password is valid", () => {
  const values1 = { password: "123Abc", confirmPassword: "123abc" };
  const values2 = { password: "123Abc", confirmPassword: "123Abc" };

  const errors1 = validateRegistrationInfo(values1);
  const errors2 = validateRegistrationInfo(values2);

  expect(errors1.confirmPassword).toBe("Password confirm is invalid");
  expect(errors2.confirmPassword).toBe(undefined);
});

it("Authorisation should check is such user is already registered", () => {
  const values1 = { email: "login2@gmail.com", password: "123Abc" };
  const values2 = { email: "login@gmail.com", password: "123Abcd" };
  const values3 = { email: "login@gmail.com", password: "123Abc" };
  const response = { data: [{ email: "login@gmail.com", password: "123Abc" }] };

  const errors1 = validateAuthInfo(values1, response);
  const errors2 = validateAuthInfo(values2, response);
  const errors3 = validateAuthInfo(values3, response);

  expect(errors1.email).toBe("Such user not found");
  expect(errors2.email).toBe("Such user not found");
  expect(errors3.email).toBe(undefined);
});
