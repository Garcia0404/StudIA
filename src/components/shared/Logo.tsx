import { Brain } from "@/lib/icons";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-main border-2  rounded-lg flex items-center justify-center">
        <Brain className="w-5 h-5" />
      </div>
      <span className="text-xl font-bold">
        StudIA
      </span>
    </Link>
  );
}
