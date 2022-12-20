import { useRouter } from "next/router";

export default function GoBack() {
  const router = useRouter();
  return (
    <div className="globalBottomBtn">
      <a className="btn btn-outline-dark" onClick={() => router.back()} type="button">
        Go Back
      </a>
    </div>
  );
}
