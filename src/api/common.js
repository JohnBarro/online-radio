import client from "./client";

const getAllContests = async () => {
  let response;
  try {
    response = await client.get("contest/active");
  } catch (err) {
    console.log(err);
    response = err;
  }
  return response;
};

export default { getAllContests };
