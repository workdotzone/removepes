import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({
  icon = '',
  title,
  description,
  features,
  image,
  href,
}: {
  icon?: string;
  title: string;
  description: string;
  features: string[];
  image?: string;
  href?: string;
}) {
  const Wrapper = href ? Link : 'div';
  return (
    <Wrapper href={href ?? '#'} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden flex flex-col group">
      {/* Image */}
      {image && (
        <div className="w-full h-48 bg-gray-200 dark:bg-slate-700 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={370}
            height={255}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {!image && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2 font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-200 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        {href && (
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:underline">Learn More →</span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
