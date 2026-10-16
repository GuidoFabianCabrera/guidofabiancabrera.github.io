import { CvDocument } from "@/components/CvDocument";
import { es } from "@/content/es";
import { cvMetadata } from "@/content/meta";

export const metadata = cvMetadata(es);

export default function Page() {
  return <CvDocument c={es} />;
}
