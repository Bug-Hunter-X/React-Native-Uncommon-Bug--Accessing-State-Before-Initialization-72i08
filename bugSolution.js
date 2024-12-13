```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {/* Correct way to handle this case: Check data before rendering*/}
      {data ? <h1>{data.name}</h1> : <p>Loading...</p>}
      {/*Alternative: Optional chaining operator*/}
      <h1>{data?.name || 'Loading...'}</h1>
    </div>
  );
}

export default MyComponent;
```