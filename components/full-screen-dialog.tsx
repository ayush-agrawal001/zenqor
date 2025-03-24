"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FullScreenDialogProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function FullScreenDialog({ trigger, children }: FullScreenDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90vw] h-[90vh] max-w-[90vw] max-h-[90vh] p-0 gap-0 rounded-lg overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="ml-auto rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto p-6">{children}</div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

