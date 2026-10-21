export function Toast({ message }: { message: string }) {
  return <div className="toast-sb" style={{ display: 'block' }}>{message}</div>;
}
