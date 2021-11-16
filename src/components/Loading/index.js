import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="text-center ptb-50">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
