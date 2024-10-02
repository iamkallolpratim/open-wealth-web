"use client";

import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import useCoinData from "../hooks/useCoinData";
import { useTranslation } from "react-i18next";

export default function PortFolioDashboard() {
  const { coinData, loading } = useCoinData();
  const { t } = useTranslation();

  const totalPortfolioValue = useMemo(() => {
    return coinData.reduce((total, asset) => {
      return total + parseFloat(asset.priceUsd) * parseFloat(asset.holdings);
    }, 0);
  }, [coinData]);
  return (
    <div className="flex flex-col bg-gray-100 text-foreground">
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-10">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{t("portfolioSummary")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xs: md:grid-cols-3 gap-6">
              <div className="bg-muted/20 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">{t("totalValue")}</h3>
                <div className="text-2xl font-bold">
                  ${totalPortfolioValue.toFixed(2)}
                </div>
              </div>
              <div className="bg-muted/20 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  {t("priceChange24h")}
                </h3>
                <div
                  className={`text-2xl font-bold ${
                    coinData.reduce(
                      (total, asset) =>
                        total + parseFloat(asset.changePercent24Hr),
                      0
                    ) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {coinData
                    .reduce(
                      (total, asset) =>
                        total + parseFloat(asset.changePercent24Hr),
                      0
                    )
                    .toFixed(2)}
                  %
                </div>
              </div>
              <div className="bg-muted/20 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">
                  {t("numberOfAssets")}
                </h3>
                <div className="text-2xl font-bold">{coinData.length}</div>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">{t("dashboard")}</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline">
                  <PlusIcon className="w-5 h-5 mr-2" />
                  {t("addAsset")}
                </Button>
                <Button>
                  <WalletIcon className="w-5 h-5 mr-2" />
                  {t("deposit")}
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              {loading && (
                <div className="flex justify-center items-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
                </div>
              )}
              {!loading && (
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-muted">
                      <th className="py-3 px-4  font-bold">{t("asset")}</th>
                      <th className="py-3 px-4 font-bold">{t("price")}</th>
                      <th className="py-3 px-4 font-bold">{t("change24h")}</th>
                      <th className="py-3 px-4 font-bold">{t("holdings")}</th>
                      <th className="py-3 px-4 font-bold">{t("value")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coinData.map((asset) => (
                      <tr
                        key={asset.id}
                        className="border-b border-muted hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-3 px-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-muted/20 flex items-center justify-center">
                            <span className="font-bold">
                              {asset.symbol.toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium">{asset.name}</h3>
                            <p className="text-muted-foreground text-sm">
                              {asset.symbol.toUpperCase()}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium">
                            ${parseFloat(asset.priceUsd).toFixed(2)}
                          </div>
                        </td>
                        <td
                          className={`py-3 px-4 ${
                            parseInt(asset.changePercent24Hr) >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {parseFloat(asset.changePercent24Hr).toFixed(2)}%
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium">
                            {parseFloat(asset.holdings).toFixed(2)}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-medium">
                            $
                            {(
                              parseFloat(asset.priceUsd) *
                              parseFloat(asset.holdings)
                            ).toFixed(2)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
