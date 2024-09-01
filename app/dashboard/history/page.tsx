"use client"

import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string
}

// Helper function to count words in a string
const countWords = (text: string): number => {
    return text.trim().split(/\s+/).length;
}

function History() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [historyList, setHistoryList] = useState<HISTORY[]>([]);

    useEffect(() => {
        if (isLoaded && isSignedIn && user) {
            const fetchData = async () => {
                const userEmail = user.primaryEmailAddress?.emailAddress;

                if (!userEmail) {
                    console.error("User email is not available.");
                    return;
                }

                // Fetch history data with type handling
                const fetchedHistory: HISTORY[] = await db
                    .select()
                    .from(AIOutput)
                    .where(eq(AIOutput.createdBy, userEmail))
                    .orderBy(desc(AIOutput.id))
                    .then(results => results as HISTORY[]);

                setHistoryList(fetchedHistory);
            };

            fetchData();
        }
    }, [isLoaded, isSignedIn, user]);

    // Ensure the correct data structure for TEMPLATE
    const GetTemplateName = (slug: string) => {
        return Templates.find((item) => item.slug === slug);
    }

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    if (!isSignedIn) {
        return <p>Please sign in to view your history.</p>;
    }

    return (
        <div className="m-5 p-5 border rounded-lg bg-white">
            <h1 className="font-bold text-2xl md:text-3xl">History</h1>
            <p className="text-gray-500 text-sm md:text-base">Search your previously generated AI content</p>
            {historyList.length === 0 ? (
                <p className="flex justify-center items-center">
                    <Loader2Icon className='animate-spin text-gray-500' />
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left mt-4">
                        <thead className="bg-gray-100">
                            <tr className="border-b">
                                <th className="p-3 font-semibold text-xs md:text-base">Template</th>
                                <th className="p-3 font-semibold text-xs md:text-base">AI Response</th>
                                <th className="p-3 font-semibold text-xs md:text-base">Date</th>
                                <th className="p-3 font-semibold text-xs md:text-base">Words</th>
                                <th className="p-3 font-semibold text-xs md:text-base">Copy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyList.map((item) => {
                                const template = GetTemplateName(item.templateSlug);
                                return (
                                    <tr key={item.id} className="border-b">
                                        <td className="p-3 flex items-center space-x-2 md:space-x-3">
                                            <img
                                                src={template?.icon || "https://cdn-icons-png.flaticon.com/128/2537/2537788.png"}
                                                alt={template?.name || "Template Icon"}
                                                className="object-cover rounded w-4 h-4 md:w-6 md:h-6"
                                            />
                                            <h2 className="font-semibold text-xs md:text-base truncate">{template?.name || "Unknown Template"}</h2>
                                        </td>
                                        <td className="p-3 truncate max-w-[80px] md:max-w-md text-xs md:text-base">{item.aiResponse.slice(0, 50)}...</td>
                                        <td className="p-3 text-xs md:text-base">{item.createdAt}</td>
                                        <td className="p-3 text-xs md:text-base">{countWords(item.aiResponse)}</td>
                                        <td className="p-3">
                                            <Button className="text-xs md:text-base" onClick={() => navigator.clipboard.writeText(item.aiResponse)}>Copy</Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default History;
