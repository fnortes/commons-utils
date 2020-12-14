const format = (data) => {
  try {
    const newData = typeof data === "object" ? data : JSON.parse(data);

    return JSON.stringify(newData, undefined, 2);
  } catch (error) {
    console.log(
      `'${data}' is not a valid JSON object or a string parseable to JSON`
    );
    return data;
  }
};

const json = {
  format,
};

export default json;
