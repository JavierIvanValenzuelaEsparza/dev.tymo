import { Skeleton } from "@/components/ui/skeleton"

export function SectionSkeleton() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-8 animate-pulse">
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-80 mx-auto bg-gray-800/50" />
          <Skeleton className="h-6 w-96 mx-auto bg-gray-800/30" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4 p-6 border border-gray-800/30 rounded-lg">
              <Skeleton className="h-6 w-3/4 bg-gray-800/50" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-gray-800/30" />
                <Skeleton className="h-4 w-5/6 bg-gray-800/30" />
                <Skeleton className="h-4 w-4/5 bg-gray-800/30" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 bg-gray-800/40" />
                <Skeleton className="h-6 w-20 bg-gray-800/40" />
                <Skeleton className="h-6 w-14 bg-gray-800/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
