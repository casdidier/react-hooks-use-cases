import fetch from "unfetch";
import { useSWR } from "swr";

//simple version
// const fetcher = (url) => fetch(url).then((r) => r.json());

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

// ...
const { data, error } = useSWR("/api/user", fetcher);
// error.info === {
//   message: "You are not authorized to access this resource.",
//   documentation_url: "..."
// }
// error.status === 403

function App() {
  const { data, error } = useSWR("/api/data", fetcher);
  // ...
}
