import Navbar from "@/components/navbar";

export default function AuthLayout(page: any) {
  return (
    <>
      <Navbar />
      <div style={{ background: "#e71414e2", borderRadius: "20px" }}>
        {page}
      </div>
    </>
  );
}
