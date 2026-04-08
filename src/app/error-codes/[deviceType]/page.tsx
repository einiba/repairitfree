import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { getErrorCodesByDevice, getDeviceTypes } from "@/lib/queries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ deviceType: string }>;
}): Promise<Metadata> {
  const { deviceType } = await params;
  const codes = await getErrorCodesByDevice(deviceType);
  if (codes.length === 0) return {};
  const deviceName = codes[0].deviceType;
  return {
    title: `${deviceName} Error Codes — Free Lookup`,
    description: `Look up ${deviceName.toLowerCase()} error codes and find out what they mean. Free diagnosis with repair guide links.`,
  };
}

export default async function DeviceErrorCodesPage({
  params,
}: {
  params: Promise<{ deviceType: string }>;
}) {
  const { deviceType } = await params;
  const codes = await getErrorCodesByDevice(deviceType);

  if (codes.length === 0) notFound();

  const deviceName = codes[0].deviceType;
  const allDeviceTypes = await getDeviceTypes();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Error Codes" },
          { label: deviceName },
        ]}
      />

      <h1 className="text-2xl font-bold mb-2">
        {deviceName} Error Codes
      </h1>
      <p className="text-muted mb-6 text-sm">
        Look up your {deviceName.toLowerCase()} error code to find out what it
        means and how to fix it.
      </p>

      <div className="space-y-3 mb-8">
        {codes.map((code) => (
          <Link
            key={code.id}
            href={`/error-codes/${code.deviceTypeSlug}/${code.codeSlug}`}
            className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded font-mono font-bold text-sm">
                {code.code}
              </span>
              <p className="text-sm text-muted">{code.meaning}</p>
            </div>
          </Link>
        ))}
      </div>

      <section>
        <h2 className="text-lg font-semibold mb-3">Other Device Types</h2>
        <div className="flex flex-wrap gap-2">
          {allDeviceTypes
            .filter((d) => d.deviceTypeSlug !== deviceType)
            .map((d) => (
              <Link
                key={d.deviceTypeSlug}
                href={`/error-codes/${d.deviceTypeSlug}`}
                className="px-3 py-1.5 border border-border rounded-lg text-sm hover:border-primary"
              >
                {d.deviceType}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
