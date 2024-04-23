import menu from "@/utils/menu";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className="flex gap-4">
      {menu.map((item) => (
        <div
          key={item.url}
          style={{ padding: "5px", color: "black", background: "white" }}
        >
          <Link href={item.url}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
}
