type StatisticsItemProps = {
  label?: string;
  value?: string | number;
  styles?: {
    container?: string;
    label?: string;
    value?: string;
  };
};
export const StatisticsItem = ({
  label,
  value,
  styles = {
    container: "",
    label: "",
    value: "",
  },
}: StatisticsItemProps) => {
  if (!label && !value) return null;
  return (
    <p
      className={`p-3 rounded-lg flex-grow-1 bg-black/33 ${styles.container} `}
    >
      <strong>
        {label && <span className={styles?.label}>{label}</span>}
        {value && (
          <span className={`ml-2 text-cyan-500 ${styles.value}`}>{value}</span>
        )}
      </strong>
    </p>
  );
};
