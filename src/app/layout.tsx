import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPIA.ai - Automated GDPR Compliance",
  description: "Generate GDPR-compliant Data Protection Impact Assessments with AI assistance in minutes, not weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
