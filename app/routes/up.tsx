export function loader() {
  return new Response("OK", { status: 200 });
}

export default function Up() {
  return null;
}
