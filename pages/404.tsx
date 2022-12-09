import Error from "components/Error";

export default function Error404({ error }: string) {
  return <Error error={error} />;
}
