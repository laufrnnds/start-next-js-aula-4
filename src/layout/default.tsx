import Navbar from "@/components/navbar";
export default function DefaultLayout(page: any) {
  return (
    <>
      <Navbar />
      <div style={{ background: "#c7c5c533", borderRadius: "20px" }}>
        {page}
      </div>
    </>
  );
}
