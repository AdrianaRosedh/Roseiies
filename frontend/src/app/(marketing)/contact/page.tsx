import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <Input type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
}