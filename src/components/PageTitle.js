export default function PageTitle({ pageTitle }) {
  if (pageTitle === "Login") {
    return (
      <>
        <h1 className=" page-title ">get your Meeow on</h1>
      </>
    );
  } else if (pageTitle === "Signup") {
    return (
      <>
        <h1 className="page-title">free networking, for all</h1>
      </>
    );
  }
}
