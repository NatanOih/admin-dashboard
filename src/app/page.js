import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link
        className="flex justify-center items-center h-[100vh]"
        href="/dashboard"
      >
        {" "}
        Dashboard{" "}
      </Link>
    </main>
  );
}
