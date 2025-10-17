// app/[locale]/supply-health-check/SpiderWebChart.tsx
"use client";

import React, { useEffect, useRef, forwardRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Define props interface
interface SpiderWebChartProps {
  departmentScores: Record<string, number>;
  selectedDepartment: string;
  onRender?: () => void;
}

// Component definition
const SpiderWebChart = forwardRef<Chart | null, SpiderWebChartProps>(
  ({ departmentScores, selectedDepartment, onRender }, chartRef) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const ctx = canvasRef.current?.getContext("2d");

      // Destroy existing chart instance if present
      if ((chartRef as any)?.current) {
        (chartRef as any).current.destroy();
      }

      if (ctx && Object.keys(departmentScores).length > 0) {
        // Plugin for white background
        const whiteBackgroundPlugin = {
          id: "whiteBackground",
          beforeDraw: (chart: Chart) => {
            const { ctx } = chart;
            ctx.save();
            ctx.globalCompositeOperation = "destination-over";
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
          },
        };

        // Create new chart
        const newChart = new Chart(ctx, {
          type: "radar",
          data: {
            labels: Object.keys(departmentScores),
            datasets: [
              {
                label: "Department Scores",
                data: Object.values(departmentScores),
                backgroundColor: "rgba(34, 202, 236, 0.2)",
                borderColor: "rgba(34, 202, 236, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(34, 202, 236, 1)",
              },
            ],
          },
          options: {
            scales: {
              r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 5,
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              // remove this line:
              // whiteBackground: whiteBackgroundPlugin,
            },
          },
          //   options: {
          //     responsive: true,
          //     maintainAspectRatio: false,
          //     scales: {
          //       r: {
          //         angleLines: { display: true },
          //         suggestedMin: 0,
          //         suggestedMax: 5,
          //       },
          //     },
          //     plugins: {
          //       legend: {
          //         display: true,
          //         position: "top",
          //       },
          //     //   whiteBackground: whiteBackgroundPlugin,
          //     },
          //   },
          plugins: [whiteBackgroundPlugin],
        });

        if (chartRef && typeof chartRef === "object") {
          (chartRef as any).current = newChart;
        }

        if (onRender) onRender();
      }

      return () => {
        if ((chartRef as any)?.current) {
          (chartRef as any).current.destroy();
        }
      };
    }, [departmentScores, chartRef, onRender]);

    return (
      <section aria-label={`${selectedDepartment} spider web chart`}>
        <h2 className="font-bold text-lg mb-2">
          {selectedDepartment} Spider Web Chart
        </h2>
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
          <canvas
            ref={canvasRef}
            aria-label="Radar chart showing department performance"
            role="img"
          >
            Your browser does not support the canvas element.
          </canvas>
        </div>
      </section>
    );
  }
);

SpiderWebChart.displayName = "SpiderWebChart";

export default SpiderWebChart;
