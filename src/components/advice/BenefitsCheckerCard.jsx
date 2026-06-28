import { Calculator } from "lucide-react";
import Button from "@/components/ui/Button";

export default function BenefitsCheckerCard() {
  return (
    <div className="bg-[#FBEAE3] border border-[#E07856]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <Calculator
            size={22}
            className="text-[#E07856] shrink-0"
            aria-hidden="true"
          />
          <h3
            className="font-semibold text-[#1F1B2E]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Check what benefits you can claim
          </h3>
        </div>
        <p className="text-sm text-[#524D63] leading-relaxed">
          Answer a few anonymous questions to see which benefits and
          entitlements you may be eligible for — it&apos;s free and takes about
          10 minutes.
        </p>
      </div>
      <div className="shrink-0">
        <Button variant="primary" href="/tools/benefits-calculator">
          Use the free calculator
        </Button>
      </div>
    </div>
  );
}
