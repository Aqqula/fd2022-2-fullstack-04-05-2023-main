import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createUser } from '../../store/usersSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    //post
    dispatch(createUser(values));
    //formikBag
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        isMale: true,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="email" placeholder="email" />
        <Field name="password" placeholder="password" />
        <Field name="birthday" placeholder="birthday" />
        <Field name="isMale" type="checkbox" />
        <input type="submit" value="add new user" />
      </Form>
    </Formik>
  );
};

export default UserForm;
