import { auth } from "@/auth";
import ROUTES from "@/constants/routes";

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Privetic</h1>
      <h1 className="h1-bold font-space-grotesk">kak delishki</h1>
    </>
  );
};

export default page;
