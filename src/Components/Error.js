import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="Contactus bg-amber-100 h-130 text-2xl">
      <h1>Oops !! Something went wrong !!</h1>
      <h2>{error.data} </h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
      <h3>Please check the URL and try Again..</h3>
    </div>
  );
};

export default Error;
