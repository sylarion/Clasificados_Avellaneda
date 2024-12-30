import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  image: string;
  className?: string;
}

export const CategoryCard = ({ title, image, className }: CategoryCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg aspect-square transition-transform hover:scale-[1.02]",
        className
      )}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/40" />
      <h3 className="absolute bottom-4 left-4 text-white text-xl font-medium">
        {title}
      </h3>
    </div>
  );
};