"use client";

import { GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const education = [
  {
    icon: <GraduationCap />,
    title: "Master's in Science In Computer Science",
    description:
      "Specialized in Artificial Intelligence and Deep Learning at Texas Tech University, USA",
    period: "2024 - Present",
  },
  {
    icon: <GraduationCap />,
    title: "Bachelor's in Electronics and Communication Engineering",
    description:
      "Specialized in Data Mining and Robotics at Institute of Engineering at Tribhuvan University, Nepal",
    period: "2017 - 2022",
  },
];

const EducationSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-base font-medium text-foreground mb-4">Education</h2>

      <div className="space-y-3">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="hover:bg-muted/50 dark:hover:border-gray-600 transition-colors py-1"
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-muted border border-gray-300 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">{edu.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-sm font-medium text-foreground">
                      {edu.title}
                    </h3>
                    {index === 0 && (
                      <Badge variant="secondary" className="text-xs">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {edu.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
