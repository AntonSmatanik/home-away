"use client";

import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  const tableRows = Array.from({ length: 5 }, (_, i) => (
    <div className="mb-4" key={i}>
      <Skeleton className="w-full h-8 rounded" />
    </div>
  ));

  return <>{tableRows}</>;
};

export default loading;
