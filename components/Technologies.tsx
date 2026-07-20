import React from 'react';
import { Card, CardContent } from './ui/card';
import { skillCategories } from '@/data/skills';
import { motion, type Variants } from "framer-motion";
import TitleSection from './TitleSection';

interface TechnologiesProps {
  sectionVariant: any;
}

const Technologies = ({ sectionVariant }: TechnologiesProps) => {
  return (
    <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          title={"Technologies I work with"}
          subTitle={"🛠️ Skills & Technologies"}
          description={
            "I use modern technologies to build scalable, maintainable and production-ready web applications with a strong focus on clean code and user experience."
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div key={category.title} whileHover={{ y: -6 }}>
              <Card className="h-full border-border/60 bg-card/80 transition-all hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>

                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
  )
}

export default Technologies;