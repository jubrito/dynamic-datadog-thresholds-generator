type OtherDocsProps = {
  visible?: false;
};

export const OtherDocs = ({ visible = false }: OtherDocsProps) => {
  if (!visible) return null;

  return (
    <>
      <p>COSMOS Confluence Documentation:</p>
      <ul>
        <li>
          <a
            href="https://pelotoncycle.atlassian.net/wiki/spaces/CC/pages/43955552401/Observability+and+Datadog+Monitors+Thresholds#Defining-warning-and-critical-thresholds-in-Datadog-Monitors"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐶 Observability and Datadog – Monitors Thresholds
          </a>
        </li>
        <li>
          <a
            href="https://pelotoncycle.atlassian.net/wiki/spaces/CC/pages/43955617912/Dynamic+Threshold+Generator+for+Datadog+Monitors"
            target="_blank"
            rel="noopener noreferrer"
          >
            📊 Dynamic Threshold Generator for Datadog Monitors
          </a>
        </li>
        <li>
          <a
            href="https://pelotoncycle.atlassian.net/wiki/spaces/CC/pages/43955617912/Dynamic+Threshold+Generator+for+Datadog+Monitors#4.1.-Generate-a-CSV-file-with-the-endpoint-metrics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              📉 How to generate a CSV file with Datadog endpoint metrics
            </strong>
          </a>
        </li>
      </ul>
    </>
  );
};
