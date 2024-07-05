import { db } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.APP_SECRET) {
    return Response.json(
      {
        status: "failure",
        message: "You are not authorized to make this request",
        data: null,
      },
      { status: 403 }
    );
  }

  try {
    if (!!id) {
      const mentors = await db.guidedForm.findUnique({ where: { id } });
      return Response.json({
        status: "success",
        data: mentors,
        message: "mentors retrieved successfully",
      });
    } else if (!id && !!email) {
      const mentors = await db.guidedForm.findFirst({ where: { email } });
      return Response.json({
        status: "success",
        data: mentors,
        message: "mentors retrieved successfully",
      });
    } else {
      const mentors = await db.guidedForm.findMany();
      return Response.json({
        status: "success",
        message: "all mentors received successfully",
        data: mentors,
      });
    }
  } catch (error) {
    return Response.json(
      {
        status: "failure",
        message: "Internal server error",
        data: null,
      },
      { status: 500 }
    );
  }
}

// expose endpoints
// https://guided-form.vercel.app/api/mentors
// https://guided-form.vercel.app/api/mentors?id=${id}
// https://guided-form.vercel.app/api/mentors?email=${email}
