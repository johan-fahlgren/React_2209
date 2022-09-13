import React, { useState, useEffect } from "react";
import "./styles.css";

const Table = () => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(true); //instead of: data !== undefined &&
  const [error, setError] = useState(false);

  /*  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos") //add ?userId=4
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      });
  }, []); */

  /* return (
    <div>
      <table>
        <tr>
          <th>User Id</th>
          <th>Task</th>
          <th>Completed?</th>
        </tr>
        {loading ? (
          <div>Loading data...</div>
        ) : (
          data
            .filter((item) => item.userId === 4)
            .map((item) => {
              return (
                <tr>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.completed ? "yes" : "no"}</td>
                </tr>
              );
            })
        )}
      </table>
    </div>
  ); */

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((apiData) => {
        setResponseData(apiData);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>There was an error. Please try again later</div>
        ) : (
          responseData.data.map((item) => {
            return (
              <li>
                {item["Nation"]}: {item.Year}: {item.Population}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Table;
