import { AreaChart, Area, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'September', uv: 37000 },
  { name: 'October', uv: 65000 },
  { name: 'November', uv: 43000 },
  { name: 'December', uv: 40000 },
  { name: 'January', uv: 50000 },
  { name: 'Febraury', uv: 45000 },
  { name: 'March', uv: 45000 },
  { name: 'April', uv: 60000 },
  { name: 'May', uv: 70000 },
  { name: 'May', uv: 70000 },
  { name: 'June', uv: 94000 },
  { name: 'July', uv: 50000 },
  { name: 'August', uv: 120000 },
];


const SubtleLineChart = ({ className }: {className?: string}) => (
  <div className={`h-64 w-full ${className}`}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        {/* Define the gradient */}
        <defs>
          <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4ADE80" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        {/* The Area component for the gradient fill */}
        <Area
          type="monotone"
          dataKey="uv"
          stroke="none"
          fillOpacity={1}
          fill="url(#colorGreen)"
        />

        {/* The Line component for the actual line */}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#4ADE80"
          strokeWidth={2}
          dot={false}
        />

        {/* Hide all axes and the Cartesian grid */}
        {/* The Tooltip is not rendered as we want no labels */}
        <Tooltip cursor={false} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default SubtleLineChart;