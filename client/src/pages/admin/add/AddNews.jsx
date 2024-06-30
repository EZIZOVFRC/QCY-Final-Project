import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Formik } from 'formik';

const AddNews = () => {
  const { news, setnews } = useContext(MainContext);
  return (
    <main className="forum">
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="form" style={{ paddingTop: '100px' }}>
        <Formik
          initialValues={{ title: "", desc: "", date: "", image: null }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('id', uuidv4());
            formData.append('title', values.title);
            formData.append('image', values.image);
            formData.append('desc', values.desc);
            formData.append('date', values.date);

            axios.post("http://localhost:8080/api/news", formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then((res) => {
              setnews([...res.data]);
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
              <h2>Add News</h2>
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
                placeholder="date..."
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

export default AddNews;
