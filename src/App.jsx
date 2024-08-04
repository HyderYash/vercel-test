import React, { useState } from "react";
import axios from "axios";

const CreateSong = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateSong = () => {
    const config = {
      method: "post",
      url: "https://api.sunoapi.com/api/v2/suno/v3.5/custom/create-pure-music",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 353f8ff950bd3419e6765e1031b782a6`,
      },
      data: {
        tags: "epic reggae",
        title: "Electric Dreams",
      },
    };

    axios(config)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <h1>Create Song</h1>
      <button onClick={handleCreateSong}>Create Song</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreateSong;
