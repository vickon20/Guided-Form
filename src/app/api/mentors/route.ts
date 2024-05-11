import { db } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  const email = searchParams.get("email");

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
}

// expose endpoints
// https://guided-form.vercel.app/api/mentors
// https://guided-form.vercel.app/api/mentors?id=${id}
// https://guided-form.vercel.app/api/mentors?email=${email}
