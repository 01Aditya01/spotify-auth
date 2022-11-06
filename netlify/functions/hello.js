export const handler = async function (event, context) {
  // const accessToken = await getAccessToken();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "helloWorld" }),
  };
};
