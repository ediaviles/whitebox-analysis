import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export const renderLineChart = (data) => (
  <LineChart width={600} height={300}>
    {console.log(data)}
    <Line data={data.max} type="monotone" dataKey="y" stroke="#d96262" />
    <Line data={data.min} type="monotone" dataKey="y" stroke="#528deb" />
    <Line data={data.avg} type="monotone" dataKey="y" stroke="#b3bcc9" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="x" allowDuplicatedCategory={false} />
    <YAxis />
  </LineChart>
);