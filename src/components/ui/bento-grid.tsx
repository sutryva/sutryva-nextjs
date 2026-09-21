import { cn } from "@/src/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  highlights,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  highlights?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 p-8 glass-card border border-slate-200 dark:border-slate-800 justify-between flex flex-col space-y-4 hover:border-cyan-500/50 relative overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center justify-between mb-4">
          {icon}
          {badge}
        </div>
        <div className="font-extrabold text-slate-900 dark:text-white text-2xl mb-2 tracking-tight">
          {title}
        </div>
        <div className="font-normal text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </div>
        {highlights && (
          <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
            {highlights.map((h, i) => (
              <div key={i} className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
