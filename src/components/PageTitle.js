export default function PageTitle({ pageTitle }) {
  if (pageTitle === "login") {
    return (
      <>
        <h1 className=" page-title ">get your Meeow on</h1>
      </>
    );
  } else if (pageTitle === "join") {
    return (
      <>
        <h1 className="page-title">free networking, for all</h1>
      </>
    );
  }
}
