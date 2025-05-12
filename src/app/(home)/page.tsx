"use client";

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Navbar from "./Navbar";
import TemplatesGallery from "./templates-gallery";
import DocumentsTable from "./documents-table";
import useSearchParams from "@/hooks/use-search-params";

export default function Home() {
  const [search] = useSearchParams();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 p-4 left-0 right-0 z-10 h-16 bg-[#FAFBFD] print:hidden">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
