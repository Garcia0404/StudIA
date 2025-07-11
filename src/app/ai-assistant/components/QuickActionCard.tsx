import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "@/lib/icons";
import React from "react";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
  onClick?: () => void;
}

export const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon: Icon,
  title,
  onClick,
}) => (
  <Card
    className="group bg-main p-0 min-[400px]:p-3 cursor-pointer"
    onClick={onClick}
  >
    <CardContent className="p-3 min-[400px]:p-4 text-center max-[400px]:flex items-center gap-3">
      <Icon className="w-8 h-8 mx-auto min-[400px]:mb-2" />
      <span className="font-semibold text-sm line-clamp-1 whitespace-nowrap flex-1 max-[400px]:text-start">
        {title}
      </span>
    </CardContent>
  </Card>
);
