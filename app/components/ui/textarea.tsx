import * as React from 'react'

import { cn } from 'app/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          (className =
            'appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  focus:border-main-primary focus-visible:outline-none pt-3 resize-none caret-main-primary '),
          // 'flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-700 leading-tight  focus:border-main-primary focus-visible:outline-none pt-3 resize-none caret-main-primary',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
