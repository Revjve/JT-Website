"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z
    .string()
    .min(10, "Please enter a phone number.")
    .refine((value) => value.replace(/\D/g, "").length >= 10, {
      message: "Please enter a valid phone number.",
    }),
  email: z.email("Please enter a valid email address."),
  serviceNeeded: z.string().min(2, "Please tell us what service you need."),
  message: z
    .string()
    .min(10, "Please add a short message so we know how to help."),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

const defaultValues: QuoteFormValues = {
  name: "",
  phone: "",
  email: "",
  serviceNeeded: "",
  message: "",
}

export function QuoteForm() {
  const [isPending, startTransition] = useTransition()
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues,
  })

  function onSubmit(values: QuoteFormValues) {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setSubmittedName(values.name.split(" ")[0] || "there")
      reset(defaultValues)
    })
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <FieldSet>
        <FieldLegend className="font-heading text-4xl leading-none font-semibold tracking-[0.01em] text-foreground">
          Request a free quote
        </FieldLegend>
        <FieldDescription className="max-w-[60ch] text-base leading-7">
          Tell us a little about the property and the cleaning you need. This
          form validates on the front end today, and the submit handler is
          ready to connect to a Next.js API route, email service, or CRM later.
        </FieldDescription>

        <FieldGroup className="mt-2 flex flex-col gap-4 md:grid md:grid-cols-2">
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              placeholder="Your name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
            <FieldError errors={[errors.name]} />
          </Field>

          <Field data-invalid={Boolean(errors.phone)}>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input
              id="phone"
              placeholder="(920) 691-2356"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
            <FieldError errors={[errors.phone]} />
          </Field>

          <Field data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>

          <Field data-invalid={Boolean(errors.serviceNeeded)}>
            <FieldLabel htmlFor="serviceNeeded">Service needed</FieldLabel>
            <Input
              id="serviceNeeded"
              placeholder="House washing, driveway cleaning, gutters..."
              aria-invalid={Boolean(errors.serviceNeeded)}
              {...register("serviceNeeded")}
            />
            <FieldError errors={[errors.serviceNeeded]} />
          </Field>

          <Field data-invalid={Boolean(errors.message)} className="md:col-span-2">
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea
              id="message"
              placeholder="Tell us what needs attention, the type of property, and the best way to reach you."
              className="min-h-32"
              aria-invalid={Boolean(errors.message)}
              {...register("message")}
            />
            <FieldError errors={[errors.message]} />
          </Field>
        </FieldGroup>
      </FieldSet>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="h-12 px-5 text-sm font-semibold uppercase tracking-[0.18em]"
        >
          {isPending ? "Sending..." : "Request Quote"}
        </Button>
        <p className="text-sm leading-6 text-muted-foreground">
          Prefer to talk first? Call the number on this page for a direct
          response.
        </p>
      </div>

      {submittedName ? (
        <div
          aria-live="polite"
          className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900"
        >
          Thanks, {submittedName}. Your quote request passed validation
          successfully. Connect the submit handler next to send these details
          to email or your preferred lead intake tool.
        </div>
      ) : null}
    </form>
  )
}
