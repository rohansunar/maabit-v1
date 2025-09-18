const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="space-y-2">
    {features.map((feature, i) => (
      <li key={i} className="flex items-center gap-2">
        <span className="text-maabit-blue">✔️</span>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);
export default FeatureList; 