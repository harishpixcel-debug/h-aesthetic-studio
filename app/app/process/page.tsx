import PageStub from "@/components/PageStub";
import { processSteps } from "@/lib/content";

export default function ProcessPage() {
  return (
    <PageStub
      eyebrow="The Process"
      title="From first idea to final detail."
      copy={`A ${processSteps.length}-stage working approach: ${processSteps.map((s) => s.name).join(" → ")}. A full walkthrough of each stage is in development.`}
    />
  );
}
