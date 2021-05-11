import React from "react";
import Head from "next/head";

import Header from "../parts/Header";

import Circle from "../../public/images/circle-hero.svg";
import Hero from "../parts/Hero";
import Client from "../parts/Clients";
import ListCourse from "../parts/ListCourses";
import ListCategories from "../parts/ListCategories";
import Footer from "../parts/Footer";
import courses from "../constraints.js/api/courses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Online Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`http://localhost:3000/images/light-logo.svg`} />
      </Head>

      <main>
        <section className="header-clipping">
          <div className="sunshine"></div>
          <Circle className="bottom-4 left-0 absolute hidden lg:block accent-circle"></Circle>
          <div className="container mx-auto px-4">
            <Header onDark login></Header>
            <div style={{ height: 50 }}></div>
            <Hero></Hero>
          </div>
        </section>
        <section className="container mx-auto mt-12 mb-12">
          <Client></Client>
        </section>
        <section className="container mx-auto mt-24 mb-12">
          <ListCourse data={data}></ListCourse>
        </section>
        <section className="container mx-auto mt-24 mb-12">
          <ListCategories></ListCategories>
        </section>
        <section className="mx-auto mt-24">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();

    return { data: data.data };
  } catch (err) {}
};

export default Home;
