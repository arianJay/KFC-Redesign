"use client"

interface SkipLinkProps {
  href: string
  children: React.ReactNode
}

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium"
      onFocus={(e) => e.currentTarget.scrollIntoView()}
    >
      {children}
    </a>
  )
}
  