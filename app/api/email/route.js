import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";

const loadDB = async()=>{
    await connectDB();
}
loadDB();

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`
    }

    await EmailModel.create(emailData);
    return Response.json({ success: true, message: "Email added successfully" });
}

export async function GET(request) {
    const emails = await EmailModel.find({});
    return Response.json({ success: true, emails });
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return Response.json({ success: true, message: "Email deleted successfully" });
}