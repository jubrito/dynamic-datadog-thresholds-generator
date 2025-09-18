import type { ThresholdData } from "../../types/types";
import { UploadCsvBox } from "../../components/UploadCsvBox/UploadCsvBox";

type ThresholdsGeneratorProps = {
  updateThresholdData: React.Dispatch<React.SetStateAction<ThresholdData>>;
};

export const ThresholdsGenerator = ({
  updateThresholdData,
}: ThresholdsGeneratorProps) => {
  return (
    <>
      <section className="flex flex-col gap-9 text-left bg-[#0f131e] p-5 rounded-xl">
        <UploadCsvBox setThresholdData={updateThresholdData} />
      </section>
    </>
  );
};
