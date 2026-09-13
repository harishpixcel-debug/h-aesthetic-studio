import { redirect } from "next/navigation";

// The Process content now lives on the homepage at /#process (matching how
// Expertise works). This route stays in place only to catch anyone with an
// old bookmark or a search-indexed link to /process, and sends them to the
// real content instead of hitting a 404.
export default function ProcessRedirect() {
  redirect("/#process");
}
