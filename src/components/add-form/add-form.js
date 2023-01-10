import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus"

const AddForm = () => {

    const focusOnerror = () => createDecorator();

    //Testing react final form with decorators
  const handleForm = (values) => {
    //submit the form
  };
  return (
    <div>
      <h1>FORMS</h1>
      <Form
        onSubmit={handleForm} >
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit} decorator={{focusOnerror}}>
            <div>
              <Field
                name="first_name"
                placeholder="First Name"
                validate={(value) => (value ? undefined : "Required")} >
                {({ input, meta , placeholder}) => (
                 <div>
                    <label>First Name</label>
                    <input placeholder={placeholder} {...input}></input>
                    {meta.touched && meta.invalid && <span>{meta.error}</span>}
                 </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="last_name"
                placeholder="Last Name"
                validate={(value) => (value ? undefined : "Required")} >
                {({ input, meta , placeholder}) => (
                 <div>
                    <label>Last Name</label>
                    <input placeholder={placeholder} {...input}></input>
                    {meta.touched && meta.invalid && <span>{meta.error}</span>}
                 </div>
                )}
              </Field>
            </div>
            <button type="submit" disabled={submitting}>
              submit
            </button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default AddForm;
