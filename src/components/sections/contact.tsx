"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-[50vh] max-w-7xl mx-auto">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          GET IN <br />
          TOUCH
        </>} />
      <div className="flex justify-center z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Connect With Me</CardTitle>
            <CardDescription className="text-lg">
              Feel free to reach out through any of these platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`mailto:${config.email}`} target="_blank">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail size={20} />
                  Email
                </Button>
              </Link>
              <Link href={config.social.github} target="_blank">
                <Button variant="outline" size="lg" className="gap-2">
                  <SiGithub size={20} />
                  GitHub
                </Button>
              </Link>
              <Link href={config.social.linkedin} target="_blank">
                <Button variant="outline" size="lg" className="gap-2">
                  <SiLinkedin size={20} />
                  LinkedIn
                </Button>
              </Link>
              {config.social.instagram && (
                <Link href={config.social.instagram} target="_blank">
                  <Button variant="outline" size="lg" className="gap-2">
                    <SiInstagram size={20} />
                    Instagram
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
