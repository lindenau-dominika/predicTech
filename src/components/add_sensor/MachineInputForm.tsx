"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "../ui/toaster";
import { getCompanyDetails } from "@/api/company";

interface CompanyProps {
  company_id: number;
}

const company = await getCompanyDetails(0);
console.log(company.production_lines);

const FormSchema = z.object({
  line_name: z.string().min(1, { message: "Line name is required." }),
  machine_name: z
    .string()
    .min(2, { message: "Machine name must be at least 2 characters." }),
  company_id: z
    .number()
    .min(0, { message: "Machine ID must be a positive number." }),
  machine_id: z
    .number()
    .min(0, { message: "Machine ID must be a positive number." }),
});

export default function MachineInputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      line_name: "",
      machine_name: "",
      company_id: company.company_id,
      machine_id: 0,
    },
  });

  // Funkcja onSubmit
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      // Uzyskaj długość maszyn w danej linii
      const line = data.line_name;
      const lineMachines = company.production_lines[line]?.machines || [];
      const nextMachineId = lineMachines.length;
      console.log(lineMachines.length);

      // Zaktualizuj machine_id w danych
      const updatedData = { ...data, machine_id: nextMachineId };

      const response = await fetch("http://localhost:5000/add-machine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to add machine.");

      toast({
        title: "Success",
        description: "Machine has been added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="line_name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Production Line</FormLabel>
              <FormControl>
                <Input placeholder="Enter line name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="machine_name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Machine Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter machine name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Add Machine</Button>
      </form>
      <Toaster />
    </Form>
  );
}
