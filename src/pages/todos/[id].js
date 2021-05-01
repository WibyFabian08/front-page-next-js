import React from 'react';
import Head from "next/head";
import {useRouter} from 'next/router';
import axios from 'axios';

function Todo({ data }) {
  const router = useRouter();
  return (
    <div className="mx-auto text-center container mt-5">
      <Head>
        <title>{data.title}</title>
      </Head>
      <main>
        <h1 className="mb-5 font-bold text-xl">Detail Post</h1>
        <h1 className="capitalize mb-3">{data.title}</h1>
        <h1 className="text-left mb-3">Create By User Number : {data.userId}</h1>
        <h1 className="text-left">{data.body}</h1>
        <button className="bg-blue-700 hover:bg-blue-600 mt-5 px-4 py-1 rounded-md text-white" type="button" onClick={() => router.push('/todos')}>Back</button>
      </main>
    </div>
  );
}

Todo.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     return json;
    //   });

    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((result) => {
      return result.data;
    })

    return { data };
  } catch (error) {
    console.log(error);
  }
};

export default Todo;
