import { ImageResponse } from "next/og";
import { baseUrl } from "@/app/sitemap";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") || "Blog Post";

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center text-neutral-100 bg-neutral-900">
          <div tw="flex w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h2 tw="flex flex-col tracking-tight text-left">
                <span tw="pb-12 text-5xl">Mark Seliverstov</span>
                <span tw="text-lg uppercase">Blog Post</span>
                <span tw="pb-12 text-6xl">{title}</span>
                <span tw="text-lg">[{baseUrl}]</span>
              </h2>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
