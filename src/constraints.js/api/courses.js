import axios from '../../pages/configs/axios';

export default {
    all: (options) =>
      axios.get(`/courses`, options).then((res) => res.data),
    details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
  };