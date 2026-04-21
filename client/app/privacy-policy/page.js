import PrivacyPolicyIntro from "../../components/privacyPolicyPage/intro/PrivacyPolicyIntro";
import PrivacyPolicyContent from "../../components/privacyPolicyPage/content/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy | The Royals",
  description:
    "Learn how The Royals collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyIntro />
      <PrivacyPolicyContent />
    </main>
  );
}
