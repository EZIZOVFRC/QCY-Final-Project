import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Formik } from 'formik';

const Add = () => {
  const { data, setdata } = useContext(MainContext);

  return (
    <main className="forum">
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div style={{ paddingTop: '100px' }} className="form">
        <Formik  className='formik'
          initialValues={{ image: null, title: "", desc: "", price: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('id', uuidv4());
            formData.append('title', values.title);
            formData.append('image', values.image);
            formData.append('desc', values.desc);
            formData.append('price', values.price);

            axios.post("http://localhost:8080/api/watches", formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((res) => {
              setdata([...res.data]);
              resetForm();
            }).catch((error) => {
              console.error("Error adding watch:", error);
              alert(`Error: ${error.response ? error.response.data.message : error.message}`);
            }).finally(() => {
              setSubmitting(false);
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h2>Add New Watch</h2>
             
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="title..."
              />
              <input
                type="text"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                placeholder="price..."
              />
              <input
                type="text"
                name="desc"
                placeholder="desc..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
              />
               <h5>Choose Photo</h5><input
               className="file"
                type="file"
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
                placeholder="image..."
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Add;
