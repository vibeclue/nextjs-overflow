import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  return (
    <>
      <h1 className="h1-bold">###</h1>
    </>
  );
};

export default page;
