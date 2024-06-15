import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Formik } from 'formik';

const AddHeadphones = () => {
  const { head, setHead } = useContext(MainContext);
  return (
    <main className="forum">
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="form" style={{ paddingTop: '100px' }}>
        <Formik
          initialValues={{ title: "", desc: "", price: "", image: null }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('id', uuidv4());
            formData.append('title', values.title);
            formData.append('image', values.image);
            formData.append('desc', values.desc);
            formData.append('price', values.price);

            axios.post("http://localhost:8080/api/headphones", formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((res) => {
              setHead([...res.data]);
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
              <h2>Add New Ear Buds</h2>
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
              <input
                type="file"
                name="image"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                onBlur={handleBlur}
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

export default AddHeadphones;
