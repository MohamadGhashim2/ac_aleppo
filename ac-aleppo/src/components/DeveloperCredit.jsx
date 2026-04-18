const DEVELOPER_URL = "https://mohamadghashim.com/";

export default function DeveloperCredit() {
  return (
    <p className="developer-credit">
      Powered by{" "}
      <a href={DEVELOPER_URL} target="_blank" rel="noreferrer">
        mohamadghashim.com
      </a>
    </p>
  );
}
