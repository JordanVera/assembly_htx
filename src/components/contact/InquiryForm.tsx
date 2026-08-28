"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number is required"),
  eventType: z.string().min(1, "Event type is required"),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  packageInterest: z.string().optional(),
  message: z.string().min(10, "Please tell us about your event"),
});

type FormValues = z.infer<typeof schema>;

export default function InquiryForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="Jane Smith" {...register("name")} className={errors.name ? "border-destructive" : ""} />
          {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" placeholder="jane@example.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" placeholder="832-555-0100" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
          {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type *</Label>
          <Input id="eventType" placeholder="Bridal shower, baby shower, birthday..." {...register("eventType")} className={errors.eventType ? "border-destructive" : ""} />
          {errors.eventType && <p className="text-destructive text-xs">{errors.eventType.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="eventDate">Preferred Event Date</Label>
          <Input id="eventDate" type="date" {...register("eventDate")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="guestCount">Estimated Guest Count</Label>
          <Input id="guestCount" placeholder="Up to 65" {...register("guestCount")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="packageInterest">Package Interest</Label>
        <Input id="packageInterest" placeholder="Package A, B, C, or not sure yet" {...register("packageInterest")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Event *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Share your vision, preferred date, and any questions about our venue or packages."
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#D4849A] text-black hover:bg-[#B86B82] uppercase tracking-[0.15em] text-xs h-12"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
