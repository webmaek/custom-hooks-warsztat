import axios from "axios";
const AIRTABLE_API_KEY = "keyj35DEn5TBJgPWj";
const AUTH_HEADER = {
  Authorization: `Bearer ${AIRTABLE_API_KEY}`,
};

export const fetchEvents = () => {
  const url =
    "https://api.airtable.com/v0/appq1ZthZ22mgK49i/Table%201?view=Grid%20view";

  return axios.get(url, {
    headers: {
      ...AUTH_HEADER,
    },
  });
};

export const deleteEvent = (id) => {
  const url = `https://api.airtable.com/v0/appq1ZthZ22mgK49i/Table%201/${id}`;

  return axios.delete(url, {
    headers: {
      ...AUTH_HEADER,
    },
  });
};

export const createEvent = (fields) => {
  const url = `https://api.airtable.com/v0/appq1ZthZ22mgK49i/Table%201`;

  return axios.post(
    url,
    { fields },
    {
      headers: {
        ...AUTH_HEADER,
        "Content-Type": "application/json",
      },
    }
  );
};
