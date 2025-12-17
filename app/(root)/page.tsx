import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const page = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold">Privetic</h1>
      <h1 className="h1-bold font-space-grotesk">kak delishki</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
};

export default page;
