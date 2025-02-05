// import Portfolio from "./Portfolio";
// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             backgroundColor: "black",
//             animation: "gradient 5s ease infinite",
//           }}
//         >
//           <div className="typing-loader">Loading...</div>
//         </div>
//       ) : (
//         <div>
//           <Portfolio />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import Portfolio from "./Portfolio";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  const text = "Loading...";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          <div className="typing-loader">
            {text.split("").map((char, index) => (
              <span key={index} className="letter">
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Portfolio />
        </div>
      )}
    </div>
  );
};

export default App;
