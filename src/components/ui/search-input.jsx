import { cn } from "@/lib/utils";
import React from "react";
import { Search } from "lucide-react";
const SearchInput = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
                    className,
                )}
            >
                <Search className="h-[16px] w-[16px]" />
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-transparent"
                />
            </div>
        );
    },
);

SearchInput.displayName = "Search";

export { SearchInput };