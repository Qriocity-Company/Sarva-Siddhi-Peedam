
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_hymAbmDW_8WLkQJ7oh7EBZ9wz4ZELx3AM")
export async function POST(req:Request){
    try {
        
        const {name,number,email} = await req.json(); 

        const res = await resend.emails.send({

            from:"Sarva Siddhi Peedam Website  <onboarding@resend.dev>",
            to:"sarvasiddhipeedam.dm@gmail.com",
            subject:"New Message from SarvaSiddhiPeedam",
            html:`
                <h3>Sender Name : ${name} </h3>
                <h3>Sender Email : ${email} </h3>
                <h3>Sender Mobile Number : ${number} </h3>
            `
        })
        return new NextResponse('Email sent successfully', { status: 200 });
    } catch (error) {
        console.log("[SEND_EMAIL]",error);
        return new NextResponse("Inter Server Error",{status:500})
    }
}