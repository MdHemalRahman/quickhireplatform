import { Palette, BarChart3, Megaphone, DollarSign, Monitor, Code2, Briefcase, Users, ArrowRight } from "lucide-react";

const categories = [
  { icon: Palette, name: "Design", count: 225, active: false },
  { icon: BarChart3, name: "Sales", count: 155, active: false },
  { icon: Megaphone, name: "Marketing", count: 140, active: true },
  { icon: DollarSign, name: "Finance", count: 325, active: false },
  { icon: Monitor, name: "Technology", count: 436, active: false },
  { icon: Code2, name: "Engineering", count: 542, active: false },
  { icon: Briefcase, name: "Business", count: 211, active: false },
  { icon: Users, name: "Human Resource", count: 346, active: false },
];

const CategoryGrid = () => (
  <section className="py-20 md:py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Explore by <span className="text-primary italic">category</span>
        </h2>
        <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-primary font-medium hover:underline">
          Show all jobs <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.name}
              className={`group rounded-xl border p-6 cursor-pointer transition-all duration-200 ${
                cat.active
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-card border-border hover:border-primary hover:shadow-md"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                cat.active ? "bg-primary-foreground/20" : "bg-accent"
              }`}>
                <Icon className={`w-5 h-5 ${cat.active ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <h3 className={`font-semibold text-base mb-1 ${cat.active ? "" : "text-foreground"}`}>
                {cat.name}
              </h3>
              <div className="flex items-center gap-1">
                <span className={`text-sm ${cat.active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {cat.count} jobs available
                </span>
                <ArrowRight className={`w-3 h-3 ${cat.active ? "text-primary-foreground/80" : "text-muted-foreground"}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoryGrid;
