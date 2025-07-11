import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface QuickActionItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const QuickActionItem: React.FC<QuickActionItemProps> = ({
  href,
  icon,
  title,
  description,
}) => (
  <Link href={href}>
    <Card className="group cursor-pointer p-0 sm:p-3 sm:min-w-64 hover:scale-105 transition-transform duration-300 bg-white">
      <CardContent className="px-0 text-center flex gap-4">
        <div
          className='size-12 rounded-xl flex items-center justify-center mx-auto sm:border-2 sm:bg-main'
        >
          {icon}
        </div>
        <div className="flex-1 max-sm:hidden">
          <h3 className="font-semibold mb-1 text-start whitespace-nowrap">
            {title}
          </h3>
          <p className="text-xs text-start">{description}</p>
        </div>
      </CardContent>
    </Card>
  </Link>
);
