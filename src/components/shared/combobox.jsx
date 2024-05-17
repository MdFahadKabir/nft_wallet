"use client"
import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Skeleton } from "@/components/ui/skeleton"
import { Search } from 'lucide-react';

import { Button } from "@/components/ui/button"


export const Combobox = ({
  data
}) => {
  const [isMacOs, setIsMacOs] = React.useState(false)
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [product, setProduct] = React.useState([])
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    if (debouncedQuery.length === 0) setProduct(null)

    if (debouncedQuery.length > 0) {

      const filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      })
 
      setProduct(filtered)

    }
  }, [debouncedQuery, data])

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((isOpen) => !isOpen)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = React.useCallback((callback) => {
    setIsOpen(false)
    callback()
  }, [])

  React.useEffect(() => {
    if (!isOpen) {
      setQuery("")
    }
  }, [isOpen])

  return (
    <div className="">
      <Button

        className="relative border bg-[#180734] text-[#595959] hover:bg-[#180734]/80 h-9 w-9 p-2 xl:h-10 xl:w-[450px] xl:justify-start xl:px-3 xl:py-2 ml-auto mr-10"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-5 w-5 xl:mr-2 text-white" aria-hidden="true" />
        <span className="hidden xl:inline-flex font-semibold">Search in Fame Guild...</span>
        <span className="sr-only">Search in Fame Guild</span>
        {/* <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <abbr title={isMacOs ? 'Command' : 'Control'}>{isMacOs ? '⌘' : 'Ctrl+'}</abbr>K
        </kbd> */}
      </Button>
      {/* @ts-ignore */}
      <CommandDialog position="top" open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search Items..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            No items found.
          </CommandEmpty>
          {isPending ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            product?.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() =>
                  handleSelect(() => router.push(`/product/${item.id}`))
                }
              >
                {item.name}
              </CommandItem>

            ))
          )}
        </CommandList>
      </CommandDialog>
    </div>
  )
}