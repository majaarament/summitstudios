import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID!;


const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_B64;
if (!raw) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_KEY_B64");

const json = Buffer.from(raw, "base64").toString("utf8");
const creds = JSON.parse(json);
creds.private_key = creds.private_key.replace(/\\n/g, "\n");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: creds.client_email,
    private_key: creds.private_key,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});


export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const data = Object.fromEntries(form.entries());

    console.log("[BRIEF]", data);

    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:D", // adjust to match your sheet columns
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          data.name || "",
          data.email || "",
          data.company || "",
          data.summary || "",
        ]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[BRIEF ERROR]", err);
    return NextResponse.json({ ok: false, error: "Failed to save to Google Sheets" }, { status: 500 });
  }
}
