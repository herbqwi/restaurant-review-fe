import ProtectedRoute from "./protected-route/protected-route";
import ShowTimer from "./show-timer/show-timer.component";

interface IProps {
  element: React.ReactElement;
  delay?: number;
  protected?: boolean;
}

export default function Page(props: IProps) {

  return (
    <ShowTimer timeout={props.delay ?? 0}>
      <ProtectedRoute active={props.protected} element={props.element} />
    </ShowTimer>
  )
}