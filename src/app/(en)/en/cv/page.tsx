import { CvDocument } from "@/components/CvDocument";
import { en } from "@/content/en";
import { cvMetadata } from "@/content/meta";

export const metadata = cvMetadata(en);

export default function Page() {
  return <CvDocument c={en} />;
}
