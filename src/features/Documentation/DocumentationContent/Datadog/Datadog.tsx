import DatadogLogo from "../../../../assets/datadog-logo.jpg";

export const Datadog = () => {
  return (
    <div className="flex">
      <img
        src={DatadogLogo}
        alt=""
        className="w-130 min-w-80 float-left mr-10"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Datadog</h1>
        <p>
          <a
            href="https://www.datadoghq.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline mr-1"
          >
            Datadog
          </a>
          is a leading full-stack observability platform that automates
          application performance monitoring, log management, infrastructure
          monitoring, and more. One of its most powerful features are{" "}
          <span className="text-indigo-300 font-bold">
            monitors with automated alerts that help teams detect when systems
            degrade or fail.
          </span>
        </p>
        <span className="bg-indigo-800 p-3 px-15 w-130">
          But how to define if a system is degrading or failing?
        </span>
      </div>
    </div>
  );
};
