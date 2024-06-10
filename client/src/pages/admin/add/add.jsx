import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Formik } from 'formik';
const Add = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div>
        <Formik
          initialValues={{ image: "", title: "", desc: "", price: "" }}
          onSubmit={(values, { setSubmitting }) => {
            axios.post("http://localhost:8080/api/exam", {
              id: uuidv4(),
              title:values.title,
              image:values.image,
              desc:values.desc,
              price:values.price
            }).then((res)=>{
                setdata([...res.data])
            })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                placeholder="image..."
              />
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
              
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Add;
